var san = require('san');

var MyComponent = san.defineComponent({
    template: '<div><span literal="a&<" data="{{var}}" data-raw="{{var | raw}}" data-literal="{{ \'a&<\' }}" data-literal-raw="{{ \'a&<\' | raw }}"></span></div>'
});

exports = module.exports = MyComponent;
