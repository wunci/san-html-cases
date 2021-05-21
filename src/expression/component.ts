import { Component } from 'san'

export default class MyComponent extends Component {
    static template = `<div><div s-if="{{ count % 2 === 0 }}">show</div></div>`
}
