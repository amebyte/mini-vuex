let Vue
class Store{
    constructor(options) {
        this._mutations = options.mutations
        this._actions = options.actions
        this._vm = new Vue({
            data() {
                return {
                    $$state: options.state
                }
            }
        })
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    get state() {
        return this._vm._data.$$state
    }
    set state(v) {
        console.error('不能直接修改state')
    }
    commit(type, payload) {
        const mutation = this._mutations[type]
        if(!mutation) {
            console.error('不存在的mutation')
            return
        }
        mutation(this.state, payload)
    }
    dispatch(type, payload) {
        const action = this._actions[type]
        if(!action) {
            console.error('不存在的action')
            return
        }
        return action(this, payload)
    }
}

function install(_vue) {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            // 根组件会存在store
            if(this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default { Store, install }