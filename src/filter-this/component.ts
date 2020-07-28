import { Component } from 'san'

export default class MyComponent extends Component {
    real () {
        return 'real'
    }
    static filters = {
        realTitle: function (title: string) {
            return title + this.real() + this.data.get('title')
        }
    }
    static template = '<div><b title="{{title | realTitle}}">{{title | realTitle}}</b></div>'
}
