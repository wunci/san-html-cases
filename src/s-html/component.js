// bool attr
var san = require('../../..');
var MyComponent = san.defineComponent({
    template: '<div>'
        + '<b s-html="html">asdfsa<u>dfa</u>sdfsa</b>'
        + '</div>'
});

exports = module.exports = MyComponent;
