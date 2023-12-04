var san = require('san');

var Inner = san.defineComponent({
    template: '<button><slot/></button>'
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner attr-title="{{text}}" attr-disabled attr-data-disabled="{{ed}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;