import { Component } from 'san'

class Label extends Component {
    template = '<span title="{{text}}">{{text}}</span>'
}

class Child extends Component {
    components = {
        'ui-label': Label
    }
    template = '<ui-label text="{{name}}"></ui-label>'
}

export default class MyComponent extends Component {
    components = {
        'ui-c': Child
    }
    template = '<ui-c name="{{name}}"></ui-c>'

    attached () {
        this.data.set('name', 'errorrik');
    }
}