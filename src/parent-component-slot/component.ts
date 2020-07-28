import { Component } from 'san'

class Grid extends Component {
    inited () {
        const $parent: Row = this.parentComponent as Row
        if ($parent.isRow) {
            const padding = $parent.data.get('gutter')
            this.data.set(
                'cls',
                `padding-${padding}`
            )
        }
    }
    static template = '<span class="grid {{cls}}">{{content}}</span>'
}

class Row extends Component {
    isRow: true
    inited () {
        this.isRow = true
        this.data.set('gutter', 4)
    }
    static template = '<div class="row"><slot/></div>'
}

export default class App extends Component {
    static components = { 'row': Row, 'grid': Grid }
    static template = '<div><row><grid content="CONTENT"/></row></div>'
}
