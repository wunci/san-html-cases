const san = require('san')

var Label = san.defineComponent({
    template: '<span title="{{text}}">{{text}}<i>{{tip}}</i></span>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-label': Label
    },

    template: '<div><b text="{{name}}" tip="{{company}}" s-is="\'x-\' + cmpt"></b></div>'
});

exports = module.exports = MyComponent
