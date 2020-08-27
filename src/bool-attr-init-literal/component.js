// bool attr
var san = require('san');
var MyComponent = san.defineComponent({
    template: '<div>'
        + '<button disabled="{{false}}">false</button>'
        + '<button disabled="{{true}}">true</button>'
        + '<button disabled="{{0}}">0</button>'
        + '<button disabled="{{3}}">3</button>'
        + '<button disabled="{{\'foo\'}}">\'foo\'</button>'
        + '</div>'
});

exports = module.exports = MyComponent;
