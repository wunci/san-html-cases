var san = require('san');

var Child = san.defineComponent({
    components: {
        'ui-sub': SubChild
    },
    template: '<p><ui-sub text="{{dt}}"/></p>'
});

var SubChild = san.defineComponent({
    template: '<i>{{text}}</i>',
    ssr: 'render-hydrate'
});

var ULabel = san.defineComponent({
    template: '<u>{{text}}</u>',
    ssr: 'render-hydrate'
});

var MyComponent = san.defineComponent({
    components: {
        'ui-u': ULabel,
        'ui-c': Child
    },
    ssr: 'render-only',
    template: '<div><ui-c dt="{{name}}"/><a><ui-u text="{{email}}"/></a></div>'
});

exports = module.exports = MyComponent;