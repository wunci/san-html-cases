import { Component } from 'san'

class U extends Component {
    static template = '<u>{{foo}}</u>'
    initData () {
        return {
            foo: 'foo'
        };
    }
}

export default class MyComponent extends Component {
    static template = '<div><my-u s-ref="uc" foo="{{formData.foo}}" /></div>'
    static components = {
        'my-u': U
    }
    initData () {
        return {
            formData: {}
        };
    }
}
