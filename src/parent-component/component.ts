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
    static template = '<span class="{{cls}}">{{content}}</span>'
}

export default class Row extends Component {
    isRow: boolean
    inited () {
        this.isRow = true
        this.data.set('gutter', 4)
    }
    static components = { 'grid': Grid }
    static template = '<div><grid content="CONTENT"/></div>'
}
