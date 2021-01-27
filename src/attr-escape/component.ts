import { Component } from 'san'

export default class MyComponent extends Component {
    static template = '<div><span literal="a&<" data="{{var}}" data-raw="{{var | raw}}" data-literal="{{ \'a&<\' }}" data-literal-raw="{{ \'a&<\' | raw }}"></span></div>'
}
