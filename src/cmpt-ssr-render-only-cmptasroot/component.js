var san = require('san');

var SubChild = san.defineComponent({
    template: '<i>{{text}}</i>',
    ssr: 'render-hydrate'
});

var Child = san.defineComponent({
    components: {
        'ui-sub': SubChild
    },
    template: '<p><ui-sub text="{{dt}}"/></p>'
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
    template: '<ui-c s-if="show" dt="{{name}}"/><a s-else><ui-u text="{{email}}"/></a>'
});

exports = module.exports = MyComponent;