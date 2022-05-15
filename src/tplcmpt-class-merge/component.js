var san = require('san');
var Child = san.defineTemplateComponent({
    template: '<b class="{{clz}}">{{text}}</b>'
});

var MyComponent = san.defineComponent({
    template: '<div><x-child class="{{clazz}}" s-ref="child" clz="{{clz}}"/></div>',
    components: {
        'x-child': Child
    }
});

exports = module.exports = MyComponent;
