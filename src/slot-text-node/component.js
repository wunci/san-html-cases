const san = require('san')

let Container = san.defineComponent({
    template: `<p>Hello<slot/>!</p>`
})
let MyComponent = san.defineComponent({
    components: { 'my-component': Container },
    template: `<my-component>aaa{{name}}<span></span></my-component>`
})

exports = module.exports = MyComponent
