# Document-Generic-React-Components

A relatively naive script to document generic components and their use inside a code-base.  React offers fantastic levels of composability which leads to many small generic and re-usable components.  As such it can be hard to know what code already exists and what components can be re-used or re-purposed.  This script aims to solve that problem.

## Sample

You can [view the docs for the sample components on github](https://github.com/serverdensity/Document-Generic-React-Components/blob/master/docs/generic-components.md), or you can view the [Server Density docs](https://github.com/serverdensity/Document-Generic-React-Components/blob/master/docs/sample/server-density-docs.md) for a real-world example.

## Usage

To generate the docs for the components in this repository:

1. `$ git clone git@github.com:serverdensity/Document-Generic-React-Components.git`
2. `npm install`
3. `npm run docs`

The docs will be generated at /docs.

## Limitations

The script to generate the documentation was built for the specific requirements of the Server Density UI codebase.  No configuration is provided and the script works based on assumptions that are only likely to be true in our code-base.

If you wish to use this yourself you will need to edit the code in [scripts/create-generic-component-docs.js](https://github.com/serverdensity/Document-Generic-React-Components/blob/master/scripts/create-generic-component-docs.js) to make it work with the requirements of your code-base.  The approach should be sound, but file paths, regular expressions, stuff like that will need to be customised.

It would be entirely possible to make this script configurable so that it can fit any code-base.
