var san = require('san');

var MyComponent = san.defineComponent({
    template: '<div>{{undef}}{{nul}}{{falsy}}{{truth}}{{estr}}{{0}}{{undef | raw}}{{nul | raw}}{{falsy | raw}}{{truth | raw}}{{estr | raw}}{{0 | raw}}</div>'
});

exports = module.exports = MyComponent;
