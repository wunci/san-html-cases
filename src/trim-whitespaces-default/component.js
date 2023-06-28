const san = require('san')


var MyComponent = san.defineComponent({
    template: '<div>'
    + '\n        <a>Foo</a>    <span>bar</span>'
    + '\n    </div>'
})

exports = module.exports = MyComponent
