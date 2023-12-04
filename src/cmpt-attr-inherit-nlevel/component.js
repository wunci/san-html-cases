var san = require('san');

var DeepInner = san.defineComponent({
    template: '<span><slot/></span>'
});

var Inner = san.defineComponent({
    template: '<ui-inner attr-data-c="cover"><slot/></ui-inner>',

    components: {
        'ui-inner': DeepInner
    }
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner class="{{clz}}" attr-title="{{text}}" attr-data-t="state:{{text}}" attr-data-c="cover:{{text}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;