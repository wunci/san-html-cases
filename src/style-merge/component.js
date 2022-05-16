const san = require('san')
var Child = san.defineComponent({
    template: '<b style="width: 1rem">{{text}}</b>'
})

var MyComponent = san.defineComponent({
    template: '<div><x-child style="{{style}}" s-ref="child"/></div>',
    components: {
        'x-child': Child
    }
})

exports = module.exports = MyComponent
