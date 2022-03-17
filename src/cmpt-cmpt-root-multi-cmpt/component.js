var san = require('san');

var XU = san.defineComponent({
    template: '<u><slot/></u>'
});

var XB = san.defineComponent({
    template: '<b><slot/></b>'
});

var MidCmpt = san.defineComponent({
    components: {
        'x-u': XU,
        'x-b': XB
    },
    template: '<x-u s-if="num"><div><span>{{num}}</span></div></x-u><x-b s-else><div>{{num}}</div></x-b>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-m': MidCmpt
    },
    template: '<div><x-m num="{{num}}" /></div>'
});


exports = module.exports = MyComponent;
