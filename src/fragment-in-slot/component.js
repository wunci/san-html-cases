const san = require('san')
var Container = san.defineComponent({
    template: '<a class="container">'
        + '<slot/>'
    + '</a>'
})
var MyComponent = san.defineComponent({
    components: { container: Container },
    template:'<div>'
        + '  <container>'
        + '    <fragment s-for="item in lists">'
        + '      <b s-if="item === 1">{{item}}</b>'
        + '      <b s-if="item === 2">{{item}}</b>'
        + '    </fragment>'
        + '  </container>'
        + '</div>',
    initData: function() {
        return {
            lists: [1, 2]
        }
    }
})

exports = module.exports = MyComponent
