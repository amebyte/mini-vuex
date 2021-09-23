let Vue
class Store{
    constructor(options) {
        this._vm = new Vue({
            data() {
                return {
                    $$state: options.state
                }
            }
        })
    }
    get state() {
        return this._vm._data.$$state
    }
    set state(v) {

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