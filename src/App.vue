<template>
  <div id="app">
  <!-- <div class="flex flex-col h-screen" id="app"> -->
      <h1 class="p-6 bg-blue-300 text-white">Card Payment</h1>
      <div class="border-b border-blue-300" id="nav">
        <router-link to="/local">Component State</router-link> |
        <router-link to="/vuex">Vuex State</router-link> |
        <router-link to="/mirage">Mirage API</router-link> |
        <router-link to="/serverAPI">Server API Implementation</router-link>
      </div>
      <router-view/>
      <!-- <div class="text-red flex-grow items-start" /> -->
      <h2 class="bg-blue-300"><a href="https://github.com/Baz-Co/vue-api-app" target="_blank">Vue API Repo</a></h2>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
