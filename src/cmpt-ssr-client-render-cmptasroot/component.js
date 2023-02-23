var san = require('san');

var ILabel = san.defineComponent({
    template: '<span title="{{text}}"><i>{{text}}</i></span>'
});

var ILabelWrap = san.defineComponent({
    components: {
        'ui-i': ILabel
    },
    template: '<ui-i text="{{text}}"/>',
    ssr: 'client-render'
});

var ULabel = san.defineComponent({
    template: '<span title="{{text}}"><u>{{text}}</u></span>'
});

var MyComponent = san.defineComponent({
    components: {
        'ui-u': ULabel,
        'ui-i': ILabelWrap
    },
    template: '<div><ui-u text="{{name}}"/><ui-i text="{{name}}"/></div>'
});

exports = module.exports = MyComponent;