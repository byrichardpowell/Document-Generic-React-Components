define ['react'], (React) ->

TestUtils   = require('react-addons-test-utils')
Component   = require('views/generic/component-b')
deepFreeze  = require('deep-freeze')

defaultProps =
    propA: {some: "prop"}
    propB: {some: "prop"}

createComponent = (props) ->

    props = _.extend({}, defaultProps, props)

    deepFreeze(props)

    return TestUtils.renderIntoDocument(
        React.createElement( ButtonLink, props )
    )

describe 'Component A', ->

    beforeEach ->
        @component = createComponent()

    it "doesn't do very much", ->
        expect(true).toBe(true)
