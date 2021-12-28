<template>
  <div class="cont">
    <Counter />
    <History />
  </div>
</template>

<script>
import Counter from "./Counter.vue";
import History from './History.vue';

export default{
  name: 'CounterContainer',
  components: { Counter, History }, 

}
</script>

<style>
.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

</style>