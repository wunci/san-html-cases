import { Component } from 'san';

class Label extends Component {
    template = '<span class="label" title="{{title}}">{{text}}</span>'

    initData () {
        return {
            title: 'title',
            text: 'text'
        };
    }
}

export default class MyComponent extends Component {
    components = {
        'ui-label': Label
    }

    template = '<div><h5><ui-label text="{{jokeName}}" class="{{labelClass}} my-label"></ui-label></h5><p><a title="{{school}}">{{school}}</a><u title="{{company}}">{{company}}</u></p></div>'

    initData () {
        return {
            jokeName: 'airike',
            school: 'none'
        };
    }
}
