import { Component } from 'san';

class InnerA extends Component {
    static template = '<span class="inner" style="background: green;" id="inner"><slot/></span>'
    static autoFillStyleAndId = false
}

class InnerB extends Component {
    static template = '<span class="inner" style="background: green;"><slot/></span>'
    static autoFillStyleAndId = false
}

class InnerC extends Component {
    static template = '<span class="inner" style="background: green;" id="inner"><slot/></span>'
}

export default class MyComponent extends Component {
    static components = {
        'a-inner': InnerA,
        'b-inner': InnerB,
        'c-inner': InnerC
    }
    static template = '<div><a-inner class="outer" style="color: red;" id="outer">{{text}}-a</a-inner><b-inner class="outer" style="color: red;" id="outer">{{text}}-b</b-inner><c-inner class="outer" style="color: red;" id="outer">{{text}}-c</c-inner></div>'
}