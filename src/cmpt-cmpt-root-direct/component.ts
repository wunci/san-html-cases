import { Component } from 'san'

class Label extends Component {
    static template = '<span title="{{text}}">{{text}}</span>'
}

export default class MyComponent extends Component {
    static components = {
        'ui-label': Label
    }
    static template = '<ui-label text="{{name}}"></ui-label>'

    attached () {
        this.data.set('name', 'errorrik');
    }
}