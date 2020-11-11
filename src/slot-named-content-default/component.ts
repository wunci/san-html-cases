import { Component } from 'san';

class Tab extends Component {
    template = '<div><div class="head"><slot name="title"><h3 title="{{title}}">{{title}}</h3></slot></div><div><slot><p title="{{text}}">{{text}}</p></slot></div></div>'

    initData () {
        return {
            title: '5',
            text: 'five'
        }
    }
}

export default class MyComponent extends Component {
    components = {
        'ui-tab': Tab
    }

    template = '<div><ui-tab title="{{tTitle}}" text="{{tText}}"></ui-tab></div>'
}
