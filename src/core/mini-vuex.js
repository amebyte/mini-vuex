let Vue
class Store{
    constructor(options) {
        this._mutations = options.mutations 
        this._actions = options.actions 
        
        this.getters = {}
        let computed = {}
        
        forEachGetters(options.getters, (fn, key) => {
            computed[key] = () => fn(this.state)
            Object.defineProperty(this.getters, key, {
                get: () =>  this._vm[key]
            })
        })

        this._vm = new Vue({
            data() {
                return {
                    $$state: options.state
                }
            },
            computed
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

const forEachGetters = (getters, cb) => {
    Object.keys(getters).forEach(key => cb(getters[key], key))
}

export default { Store, install }