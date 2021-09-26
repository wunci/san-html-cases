const san = require('san')

var Child = san.defineComponent({
    template: `<div>child</div>`
})

var MyComponent = san.defineComponent({
    components: {
        'x-child': Child
    },
    template: `<span>
        <aaa s-is="cmpt">{{text}}</aaa>
        <aaa s-is="isDiv ? 'div' : 'p'">{{text}}</aaa>
    </span>`
});

exports = module.exports = MyComponent
