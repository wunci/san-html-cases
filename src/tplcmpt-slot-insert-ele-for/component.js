
var san = require('san');


var Folder = san.defineTemplateComponent({
    template: '<div><h3><slot name="title"/></h3><slot/></div>'
});

var MyComponent = san.defineComponent({
    components: {
      'x-folder': Folder
    },

    template: ''
        + '<div>'
          + '<x-folder s-ref="folder"><b slot="title">{{name}}</b><template san-for="p,i in persons">  <h4>{{p.name}}</h4><p>{{p.email}}</p>  </template></x-folder>'
        + '</div>'
});

exports = module.exports = MyComponent;
