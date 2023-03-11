var san = require('san');

var SubChild = san.defineComponent({
    template: '<i>{{text}}</i>',
    ssr: 'render-hydrate'
});

var Child = san.defineComponent({
    components: {
        'ui-sub': SubChild
    },
    template: '<p><ui-sub text="{{dt}}"/><slot/></p>'
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
    template: '<ui-c dt="{{name}}"><a><ui-u text="{{email}}"/></a></ui-c>'
});

exports = module.exports = MyComponent;