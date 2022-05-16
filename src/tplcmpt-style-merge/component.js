const san = require('san')
var Child = san.defineTemplateComponent({
    template: '<b style="{{styi}}">{{text}}</b>'
})

var MyComponent = san.defineComponent({
    template: '<div><x-child style="{{sty}}" styi="{{styi}}"/></div>',
    components: {
        'x-child': Child
    }
})

exports = module.exports = MyComponent
