const san = require('san')

let container = san.defineComponent({
    template: `<p>Hello<slot/>!</p>`
})
let MyApp = san.defineComponent({
    components: { 'my-component': container },
    template: `<my-component>aaa{{name}}<span></span></my-component>`
})

exports = module.exports = MyApp
