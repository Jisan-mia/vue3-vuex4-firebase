<template>
  <div class="main">
    <router-link to="/">
      Counter
    </router-link>
    <router-link to="/login">
      login
    </router-link>
  </div>
    <router-view></router-view>
</template>

<script>
import CounterContainer from './components/Counter Project/CounterContainer.vue'
  export default {
  components: { CounterContainer },

    setup() {

    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: inherit;
  text-decoration: underline;
  margin: 0.5rem;

}

.main {
  margin: 2rem ;
  font-size: 1.1rem;
  

}
</style>
