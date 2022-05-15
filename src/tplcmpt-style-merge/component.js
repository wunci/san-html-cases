const san = require('san')
const Child = san.defineTemplateComponent({
    template: '<b style="{{styi}}">{{text}}</b>'
})

const MyComponent = san.defineComponent({
    template: '<div><x-child style="{{sty}}" styi="{{styi}}"/></div>',
    components: {
        'x-child': Child
    }
})

exports = module.exports = MyComponent
