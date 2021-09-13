const san = require('san')

var Label = san.defineComponent({
    template: '<div>aaa</div>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-label': Label
    },

    template: `<div>
        <div s-if="{{false}}">
            hahaha
        </div>
        <div s-else>
            <div s-is="mycomponent"></div>
        </div>
    </div>`
});

exports = module.exports = MyComponent
