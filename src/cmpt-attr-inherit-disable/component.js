var san = require('san');

var Inner = san.defineComponent({
    template: '<span><slot/></span>',
    inheritAttrs: false
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner s-ref="inner" attr-title="{{text}}" attr-data-t="state:{{text}}" class="a" style="display:none" id="happy">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;