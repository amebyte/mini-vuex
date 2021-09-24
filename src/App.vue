<template>
  <div id="app">
    coboy{{$store.state.counter}}
        <!-- 全局状态 -->
    <p @click="$store.commit('add')">{{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">{{$store.state.counter}}</p>
    <!-- <p>{{$store.getters.doubleCounter}}</p> -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
