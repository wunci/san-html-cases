var san = require('san');
var MyComponent = san.defineComponent({
    template: '<div id="output-data-outer">'
        + '<b>{{title}}</b>'
        + '<div s-html="{{content}}"></div>'
        + '</div>'
});

exports = module.exports = MyComponent;
