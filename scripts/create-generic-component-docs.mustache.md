# Generic components

Before you write a piece of functionality check if there is already a component that does that for you.

## Index

{{#hasUnusedComponents}}

### Unused components ({{unusedComponentsCount}})

It looks like these components are not used anywhere.  Can they be deleted?

{{#unusedComponents}}
* [{{displayName}}](#{{id}})
{{/unusedComponents}}

{{/hasUnusedComponents}}

### Used components ({{usedComponentsCount}})

These components are used by at-least one component or view.

{{#usedComponents}}
* [{{displayName}}](#{{id}})
{{/usedComponents}}

{{#hasUnusedComponents}}








## Unused Components ({{unusedComponentsCount}})

{{#unusedComponents}}

### {{displayName}}

* Path: [{{{requirePath}}}]({{{gitHubPath}}})
* {{loc}} lines of code

**Unit Tests**

{{#hasTests}}
Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

{{#tests}}
* {{{title}}}
{{/tests}}
{{/hasTests}}

{{^tests}}
Could not find any unit tests for this component
{{/tests}}

**Render Method**

````
{{{renderMethod}}}
````
{{/unusedComponents}}

{{/hasUnusedComponents}}









## Used Components ({{usedComponentsCount}})

{{#usedComponents}}

### {{displayName}}

* Path: [{{{requirePath}}}]({{{gitHubPath}}})
* {{loc}} lines of code

**Used By:**
{{#usedBy}}
* [{{{requirePath}}}]({{{gitHubPath}}})
{{/usedBy}}

**Unit Tests**

{{#hasTests}}
Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

{{#tests}}
* {{{title}}}
{{/tests}}
{{/hasTests}}

{{^tests}}
Could not find any unit tests for this component
{{/tests}}

**Render Method**

````
{{{renderMethod}}}
````

{{/usedComponents}}
