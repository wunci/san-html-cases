var san = require('san');

var XP = san.defineComponent({
    template: '<p><slot/></p>'
});

var XA = san.defineComponent({
    template: '<a><slot/></a>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-p': XP,
        'x-a': XA
    },
    template: '<x-p s-if="num"><b><span>{{num}}</span></b></x-p><x-a s-else><b>{{num}}</b></x-a>'
});

exports = module.exports = MyComponent;
