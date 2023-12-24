var san = require('san');

var Inner = san.defineTemplateComponent({
    template: '<p><span s-bind="$attrs"><slot/></span></p>',
    inheritAttrs: false
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner attr-title="{{text}}" attr-data-t="state:{{text}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;