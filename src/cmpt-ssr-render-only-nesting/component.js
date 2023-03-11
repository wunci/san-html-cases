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

var LabelChild = san.defineComponent({
    components: {
        'ui-sub': SubChild
    },
    template: '<div class="label-child"><ui-sub text="{{text}}"/></div>',
    ssr: 'render-only'
});

var ULabel = san.defineComponent({
    components: {
        'ui-c': LabelChild
    },
    template: '<div><ui-c text="{{text}}"/></div>',
    ssr: 'render-hydrate'
});

/**
 * MyComponent(render-only)
 *  -> Child(undefined) -> SubChild(render-hydrate)
 *  -> ULabel(render-hydrate) -> LabelChild(render-only) -> SubChild(render-hydrate)
 */
var MyComponent = san.defineComponent({
    components: {
        'ui-u': ULabel,
        'ui-c': Child
    },
    ssr: 'render-only',
    template: '<div><ui-c dt="{{name}}"/><a><ui-u text="{{email}}"/></a></div>'
});

exports = module.exports = MyComponent;