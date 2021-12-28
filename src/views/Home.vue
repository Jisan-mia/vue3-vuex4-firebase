<template>
  <div class="home">
    <CounterContainer />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterContainer from '../components/Counter Project/CounterContainer.vue'

export default {
  name: 'Home',
  components: {
    CounterContainer
}
}
</script>
