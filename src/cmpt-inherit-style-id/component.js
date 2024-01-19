var san = require('san');

var InnerA = san.defineComponent({
    template: '<span class="inner" style="background: green;" id="inner"><slot/></span>',
    autoFillStyleAndId: false
});

var InnerB = san.defineComponent({
    template: '<span class="inner" style="background: green;"><slot/></span>',
    autoFillStyleAndId: false
});

var InnerC = san.defineComponent({
    template: '<span class="inner" style="background: green;" id="inner"><slot/></span>'
})


var MyComponent = san.defineComponent({
    template: '<div><a-inner class="outer" style="color: red;" id="outer">{{text}}-a</a-inner><b-inner class="outer" style="color: red;" id="outer">{{text}}-b</b-inner><c-inner class="outer" style="color: red;" id="outer">{{text}}-c</c-inner></div>',

    components: {
        'a-inner': InnerA,
        'b-inner': InnerB,
        'c-inner': InnerC
    }
});

exports = module.exports = MyComponent;