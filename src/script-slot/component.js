var san = require('san');
var Script = san.defineComponent({
    template: '<script><slot/>;<slot name="foo"/></script>'
});

var MyComponent = san.defineComponent({
    components: {
        's-script': Script
    },
    template: '<div><s-script>alert(1)<fragment slot="foo">alert(2)</fragment></s-script></div>'
});

exports = module.exports = MyComponent;
