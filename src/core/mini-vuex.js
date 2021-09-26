let Vue
class Store{
    constructor(options) {
        this._mutations = options.mutations 
        this._actions = options.actions 
        console.log('bbb')
        this.getters = {}
        Object.keys(options.getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => options.getters[key](this.state)
            })
        })
        console.log('xxx')
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
    get state() {console.log('this._vm', this._vm)
        return this._vm._data.$$state
    }
    set state(v) {
        console.error('不能直接修改state')
    }
    commit(type, payload) {
        const mutation = this._mutations[type]
        if(!mutation) {
            console.error('请正确提交')
            return
        }
        mutation(this.state, payload)
    }
    dispatch(type, payload) {
        const action = this._actions[type]
        if(!action) {
            console.error('请正确提交')
            return
        }
        action(this, payload)
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