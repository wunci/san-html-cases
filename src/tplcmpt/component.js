var san = require('san');

var Child = san.defineTemplateComponent({
    template: '<h3>see <a href="{{link}}">{{linkText || name}}</a> to start <b>{{name}}</b> framework</h3>'
});

var MyComponent = san.defineComponent({
    template: '<div><x-wrap link="{{link}}" name="{{framework}}" link-text="{{linkText}}" /></div>',
    components: {
        'x-wrap': Child
    }
});

exports = module.exports = MyComponent;