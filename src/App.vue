<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <h1>15º CEIRA ROCK FEST</h1>
    <h2>14.03.2020</h2>
    <p>Estamos a preparar uma festa... e o site também.</p>
    <p>Mas podes ver as primeiras bandas pelo <a href="https://www.facebook.com/crf.ceirarockfest/">facebook</a>.</p>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  background-color: #383430;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
