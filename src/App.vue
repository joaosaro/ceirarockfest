<template>
  <div id="app">
    <MainNav />
    <div style="background: steelblue">bandas</div>
    <div style="background: black">footer</div>
  </div>
</template>

<script>
import MainNav from './components/MainNav'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  height: 100%;
}

h1 {
  font-size: 50px;
  margin-bottom: 0;
}

h2,
a {
  color: #FACEC1;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
