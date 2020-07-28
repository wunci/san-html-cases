import { Component } from 'san'

export default class MyComponent extends Component {
    inited () {
        const { author, modified } = this.data.get()
        this.data.set('credit', `authored by ${author}, modified by ${modified}`)
    }
    static template = '<div>{{credit}}</div>'
}
