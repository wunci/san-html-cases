const san = require('san')

var Container = san.defineComponent({
    template: '<p>Hello<slot/>!</p>'
})
var MyComponent = san.defineComponent({
    components: { 'my-component': Container },
    template: '<my-component>aaa{{name}}<span></span></my-component>'
})

exports = module.exports = MyComponent
