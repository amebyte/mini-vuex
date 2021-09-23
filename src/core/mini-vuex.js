let Vue
class Store{
    constructor(options) {
        this.state = new Vue({
            data() {
                return options.state
            }
        })
    }
}

function install(_vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            if(this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }