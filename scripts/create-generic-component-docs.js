var walk = require('walk');
var fs = require('fs');
var sloc = require('sloc');
var Mustache = require('mustache');
var gitHubCoffeeScriptRootPath = 'https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/'
var TemplatePath = './scripts/create-generic-component-docs.mustache.md';
var docsPath = './docs/generic-components.md'
var allFiles = [];
var genericComponents = [];

var extractValueFromText = function(key, text) {

    var regExp              = new RegExp(key + ": (.*?)\n", "g");
    var lineContainingKey   = (text.match( regExp ) || [])[0];

    if (!lineContainingKey) {
        return undefined;
    }

    // Seperate the displayName from the text surrounding it
    var splitLine = lineContainingKey.split("'");
    if (splitLine.length === 1) {
        splitLine = lineContainingKey.split('"');
    }

    return splitLine[1];

}

var extractRenderMethod = function(content) {

    // line including render: till end of file
    var renderMethod = content.slice(content.indexOf("render:") + 10, content.lastIndexOf(')') + 1)

    // line after render: till last )
    var renderMethod = renderMethod.slice(renderMethod.indexOf("\n") + 1, renderMethod.length)

    return renderMethod

}

// Walker options
var walker  = walk.walk('./app/coffeescript/views', { followLinks: false });

// Every time we get a file
walker.on('file', function(root, stat, next) {

    var filePath     = root + '/' + stat.name;
    var splitPath    = filePath.split('/');
    var viewPath     = splitPath.slice(3, splitPath.length).join('/')
    var gitHubPath   = gitHubCoffeeScriptRootPath + viewPath
    var requirePath  = viewPath.split('.')[0];
    var unitTestPath = "./tests/unit/coffeescript/" + requirePath + "-spec.csx.coffee"

    // open the file
    fs.readFile(filePath, "utf8", function (error, content) {

        // We us this information to know which
        // views/components use which generic componnet
        allFiles.push({
            gitHubPath: gitHubPath,
            requirePath: requirePath,
            content: content
        });

        var isGenericComponent = filePath.indexOf('/generic/') > -1 && filePath.indexOf('.csx.coffee') > -1

        // Paths with 8 or more folders in them tend to be child components of generic components
        // We only was the generic components themselves, not the children of generic components
        var isNestedShallowly  = splitPath.length < 8

        // It's a generic component
        // and it's shallow enough to be the base generic component
        if (isGenericComponent && isNestedShallowly) {

            var displayName  = extractValueFromText("displayName", content);
            var renderMethod = extractRenderMethod(content)
            var loc          = sloc(content, "js").total

            // Ideally all components should have a displayName
            if (!displayName) {
                console.warn(requirePath + " missing displayName, skipping.");
                return
            }

            // open the file
            fs.readFile(unitTestPath, "utf8", function (error, testContent) {

                var tests = []

                if (error) {
                    console.log("could not find unit tests for " + requirePath);
                } else {
                    var itRegex = new RegExp('it (.*?), (=>|->)', 'g');

                    // Extract only the title of the test
                    tests = (testContent.match(itRegex) || []).map(function(test) {
                        return {
                            title: test.split('"')[1] || test.split("'")[1]
                        }
                    })

                }

                // We use this information to render the mustache template
                genericComponents.push({
                    requirePath: requirePath,
                    gitHubPath: gitHubPath,
                    displayName: displayName,
                    id: displayName.toLowerCase(),
                    loc: loc,
                    renderMethod: renderMethod,
                    tests: tests,
                    hasTests: tests.length > 0,
                    usedBy: []
                })

                next();
            })

        } else {
            next();
        }

    });

});

walker.on('end', function() {

    // Ensure we display usedBy files in alphabetical order
    allFiles.sort(function(fileA, fileB) {
        if (fileA.requirePath < fileB.requirePath) return -1;
        else if (fileA.requirePath > fileB.requirePath) return 1;
        else return 0;
    })

    // Ensure we display generic components in alphabetical order
    genericComponents.sort(function(fileA, fileB) {
        if (fileA.displayName.toLowerCase() < fileB.displayName.toLowerCase()) return -1;
        else if (fileA.displayName.toLowerCase() > fileB.displayName.toLowerCase()) return 1;
        else return 0;
    })

    // Populate the usedBy Array
    // Each component maintains a list of each view/component that uses it
    allFiles.forEach(function(file) {

        genericComponents.forEach(function(genericComponent) {

            var escapedRequirePath = genericComponent.requirePath.split('/').join('\\/')
            var requirePathRegExpression = new RegExp(escapedRequirePath, 'g')

            // Note: This is a simplistic calculation.
            // It counts the number of times we require generic components.
            // It doesn't count the number of times we *use* that required component
            // So if you require a component, but don't use it, or if you require a component
            // but use it twice in that component, this number will be innacurate.
            // I can't imagine these edge cases apply that often
            var genericComponentUsedByFile = ( file.content.match( requirePathRegExpression ) || [] ).length > 0;

            if (genericComponentUsedByFile) {
                genericComponent.usedBy.push(file)
            }

        })

    })

    // Seperate unused components from used components
    // We'll maintain a seperate list for these
    // Hopefully that will make it obvious when a component needs deleteing
    unusedComponents = genericComponents.filter(function(component) {
        return component.usedBy.length === 0
    })

    usedComponents = genericComponents.filter(function(component) {
        return component.usedBy.length > 0
    })


    // open the file
    fs.readFile(TemplatePath, "utf8", function (error, template) {

        var docsContent = Mustache.render(template, {
            components: genericComponents,
            unusedComponents: unusedComponents,
            unusedComponentsCount: unusedComponents.length,
            hasUnusedComponents: unusedComponents.length > 0,
            usedComponents: usedComponents,
            usedComponentsCount: usedComponents.length
        });

        fs.writeFile("./docs/generic-components.md", docsContent, function(error) {

            if(error) {
                console.log("Could not create documentation")
                console.log(error);
                return
            }

            console.log(genericComponents.length + " generic components documented at " + docsPath);

        });

    });
});
