define ['react'], (React) ->

TestUtils   = require('react-addons-test-utils')
Component   = require('views/generic/component-a')
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

    it 'does something', ->
        expect(true).toBe(true)

    it 'does something else', ->
        expect(true).toBe(true)

    it 'does something awesome', ->
        expect(true).toBe(true)

    it 'does something min blowing', ->
        expect(true).toBe(true)

    it 'does something truly earth shattering', ->
        expect(true).toBe(true)

    it 'blows your mind', ->
        expect(true).toBe(true)
        
