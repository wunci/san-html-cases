import { Component } from 'san'

class ComponentB extends Component {
    static template = '<div>{{text}}</div>'
}

export default class MyComponent extends Component {
    static components = {
        aaa: ComponentB
    }
    static template = `<div><aaa text="index is: {{index + 1}}"/></div>`
    initData () {
        return { index: 1 }
    }
}
