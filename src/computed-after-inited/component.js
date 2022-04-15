// computed data
var san = require('san');

var MyComponent = san.defineComponent({
    inited () {
        this.data.set('title', '2');
    },
    computed: {
        realTitle: function () {
            return 'real' + this.data.get('title');
        }
    },

    template: '<div><b title="{{realTitle}}">{{realTitle}}</b></div>'
});

exports = module.exports = MyComponent;
