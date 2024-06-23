var san = require('san');

var Inner = san.defineComponent({
    template: '<span><slot/></span>'
});

var MyComponent = san.defineComponent({
    template: '<div><ui-inner attr-bool="{{cond ? false : true}}" attr-name="{{cond && text}}" attr-data-t="state:{{text}}">{{text}}</ui-inner></div>',

    components: {
        'ui-inner': Inner
    }
});

exports = module.exports = MyComponent;