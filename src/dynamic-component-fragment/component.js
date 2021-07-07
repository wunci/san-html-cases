const san = require('san')

var MyComponent = san.defineComponent({
    template: '<span><fragment s-is="cmpt">{{text}}</fragment></span>'
});

exports = module.exports = MyComponent
