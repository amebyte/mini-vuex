let Vue
class Store{
    constructor(options) {
        this.$options = options
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