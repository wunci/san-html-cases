
var san = require('san');

var MyComponent = san.defineComponent({
    template: '<u>&#39;&#x00021;&emsp;&ensp;&thinsp;&copy;&lt;p&gt;&reg;&lt;/p&gt;&reg;&zwnj;&zwj;&lt;&nbsp;&gt;&quot;</u>'
});

exports = module.exports = MyComponent;
