// default and named slot
var san = require('san');
var Tab = san.defineComponent({
    template: '<div>'
        +   '<div class="head"><slot name="title"></slot></div>'
        +   '<div><slot></slot></div>'
        +   '<u title="{{text}}"></u>'
        + '</div>',
    computed: {
        text() {
            if (this.sourceSlots.named.title) {
                return 'aaa'
            }
            return 'bbb'
        }
    }
});

var MyComponent = san.defineComponent({
    components: {
        'ui-tab': Tab
    },

    template: '<div><ui-tab>'
        + '<h3 slot="title">a</h3>'
        + '</ui-tab></div>'
});

exports = module.exports = MyComponent;
