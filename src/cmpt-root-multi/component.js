var san = require('san');

var XU = san.defineComponent({
    template: '<u><slot/></u>'
});

var XB = san.defineComponent({
    template: '<b><slot/></b>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-u': XU,
        'x-b': XB
    },
    template: '<x-u s-if="num"><div><span>{{num}}</span></div></x-u><x-b s-else><div>{{num}}</div></x-b>'
});

exports = module.exports = MyComponent;
