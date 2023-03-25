var san = require('san');

var MyComponent = san.defineComponent({
    components: {
        'ui-u': {
            template: '<u>{{text}}</u>',
            ssr: 'render-hydrate'
        },
        'ui-c': {
            components: {
                'ui-sub': {
                    template: '<i>{{text}}</i>',
                    ssr: 'render-hydrate'
                }
            },
            template: '<p><ui-sub text="{{dt}}"/></p>'
        }
    },
    ssr: 'render-only',
    template: '<div><ui-c dt="{{name}}"/><a><ui-u text="{{email}}"/></a></div>'
});

exports = module.exports = MyComponent;