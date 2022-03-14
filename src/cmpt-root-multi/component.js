var san = require('san');

var XL = san.defineComponent({
    template: '<article><slot/></article>'
});

var XD = san.defineComponent({
    template: '<div><span>222</span></div>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-l': XL,
        'x-d': XD
    },
    template: '<x-l s-if="num>10"><x-d></x-d></x-l><x-l s-else><div>111</div></x-l>'
});

exports = module.exports = MyComponent;
