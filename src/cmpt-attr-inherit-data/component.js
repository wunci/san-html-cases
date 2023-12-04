var san = require('san');

var Inner = san.defineComponent({
    template: '<p><span s-bind="$attrs"><slot/></span></p>'
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner attr-title="{{text}}" attr-data-t="state:{{text}}" s-ref="inn">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;