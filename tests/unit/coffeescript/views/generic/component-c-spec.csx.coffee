define ['react'], (React) ->

TestUtils   = require('react-addons-test-utils')
Component   = require('views/generic/component-c')
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

    it 'render stuff', ->
        expect(true).toBe(true)

    it 'renders some stuff using props', ->
        expect(true).toBe(true)

    it 'responds to some user events', ->
        expect(true).toBe(true)
