var san = require('san');

var MyComponent = san.defineComponent({
    template: '<script>alert("{{msg}}")</script>'
});

exports = module.exports = MyComponent;
