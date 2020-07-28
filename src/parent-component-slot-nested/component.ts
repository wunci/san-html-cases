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
    isRow: boolean
    inited () {
        this.isRow = true
        this.data.set('gutter', 4)
    }
    static template = '<div class="row"><slot/></div>'
}

class Table extends Component {
    static components = { 'row': Row, 'grid': Grid }
    static template = '<div class="table"><row><slot/></row></div>'
}

export default class App extends Component {
    static components = { 'i-table': Table, 'grid': Grid }
    static template = '<div><i-table><grid content="CONTENT"/></i-table></div>'
}
