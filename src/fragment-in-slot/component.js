const san = require('san')
let Container = san.defineComponent({
    template: `
        <div class="container">
            <slot/>
        </div>
    `
})
let MyComponent = san.defineComponent({
    components: { container: Container },
    template: `
        <div>
            <container>
                <fragment s-for="item in lists">
                    <div s-if="item === 1">{{item}}</div>
                    <div s-if="item === 2">{{item}}</div>
                </fragment>
            </container>
        </div>
    `,
    initData() {
        return {
            lists: [1, 2]
        }
    }
})

exports = module.exports = MyComponent
