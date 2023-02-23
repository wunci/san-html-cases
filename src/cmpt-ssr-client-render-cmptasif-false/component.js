var san = require('san');

var ILabel = san.defineComponent({
    template: '<span s-if="v" title="{{text}}"><i>{{text}}</i></span>',
    ssr: 'client-render'
});

var ULabel = san.defineComponent({
    template: '<span title="{{text}}"><u>{{text}}</u></span>'
});

var BLabel = san.defineComponent({
    template: '<span title="{{text}}"><b>{{text}}</b></span>'
});

var MyComponent = san.defineComponent({
    components: {
        'ui-u': ULabel,
        'ui-i': ILabel,
        'ui-b': BLabel
    },
    template: '<div><ui-u text="{{name}}"/><ui-i text="{{name}}" v="{{show}}"/><ui-b text="{{name}}"/></div>'
});

exports = module.exports = MyComponent;