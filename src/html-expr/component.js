const san = require('san')

var MyComponent = san.defineComponent({
    template: "<div>{{ true ? '1' : '2' | raw }}3</div>"
})

exports = module.exports = MyComponent
