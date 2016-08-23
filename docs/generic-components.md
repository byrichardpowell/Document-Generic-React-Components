# Generic components

Before you write a piece of functionality check if there is already a component that does that for you.

## Index


### Unused components (1)

It looks like these components are not used anywhere.  Can they be deleted?

* [ComponentD](#componentd)


### Used components (3)

These components are used by at-least one component or view.

* [ComponentA](#componenta)
* [ComponentB](#componentb)
* [ComponentC](#componentc)









## Unused Components (1)


### ComponentD

* Path: [views/generic/component-d](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-d.csx.coffee)
* 28 lines of code

**Unit Tests**


Could not find any unit tests for this component

**Render Method**

````
        return (
            <div className="index-component">
                <h1>This is component D</h1>

                <ComponentA/>
                <ComponentB/>

            </div>
        )
````










## Used Components (3)


### ComponentA

* Path: [views/generic/component-a](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-a.csx.coffee)
* 28 lines of code

**Used By:**
* [views/about](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/about.csx.coffee)
* [views/banner](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/banner.csx.coffee)
* [views/generic/component-b](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-b.csx.coffee)
* [views/generic/component-c](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-c.csx.coffee)
* [views/generic/component-d](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-d.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* does something
* does something else
* does something awesome
* does something min blowing
* does something truly earth shattering
* blows your mind

**Render Method**

````
        return (
            <div className="index-component">
                <h1>This is component A</h1>

                <ComponentB/>
                <ComponentC/>

            </div>
        )
````


### ComponentB

* Path: [views/generic/component-b](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-b.csx.coffee)
* 28 lines of code

**Used By:**
* [views/contact](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/contact.csx.coffee)
* [views/generic/component-a](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-a.csx.coffee)
* [views/generic/component-c](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-c.csx.coffee)
* [views/generic/component-d](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-d.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* doesn't do very much

**Render Method**

````
        return (
            <div className="index-component">
                <h1>This is component B</h1>

                <ComponentC/>
                <ComponentD/>

            </div>
        )
````


### ComponentC

* Path: [views/generic/component-c](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-c.csx.coffee)
* 28 lines of code

**Used By:**
* [views/generic/component-a](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-a.csx.coffee)
* [views/generic/component-b](https://github.com/serverdensity/honshuu-ui/blob/master/app/coffeescript/views/generic/component-b.csx.coffee)

**Unit Tests**

Only it statements are extracted, e.g: `it "tests something", ->`. Describe blocks are ignored and nesting is not understood.

* render stuff
* renders some stuff using props
* responds to some user events

**Render Method**

````
        return (
            <div className="index-component">
                <h1>This is component C</h1>

                <ComponentA/>
                <ComponentB/>

            </div>
        )
````

