var san = require('san');
var List = san.defineComponent({
    template: '<ul><li s-for="item,i in list">{{i+1}}. {{item}}</li></ul>'
});

var MyComponent = san.defineComponent({
    components: {
        'x-l': List
    },
    template: '<div><x-l list="{{[1, true, ...ext, \'erik\', ...ext2]}}"/></div>'
});

exports = module.exports = MyComponent;
