// date init data
var san = require('san');
var MyComponent = san.defineComponent({
    filters: {
        year: function (date) {
            return date.getFullYear()
        }
    },
    template: '<div>'
        + '<b title="{{date|year}}">{{date|year}}</b>'
        + '</div>',

    initData: function () {
        return {
            date: new Date('1983-09-02T16:00:00.000Z')
        };
    }
});

exports = module.exports = MyComponent;
