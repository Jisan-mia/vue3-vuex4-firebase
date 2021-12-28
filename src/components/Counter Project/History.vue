<template>
  <div class="history">
    <div class="top">
      <h3>
        History
      </h3>
      <input v-model="searchVal" placeholder="search history" type="number">
    </div>
    <div class="bottom">
      <div 
        v-for="(number, index) in history" 
        :key="index"
        :class="activeIndex(parseInt(searchVal)).includes(index) && 'bold'" 
      >
        {{number}}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import { watchEffect } from '@vue/runtime-core';
export default {
name: 'History',
setup() {
  const searchVal = ref(null)
  const store = useStore();

  const history = computed(() => store.state.counter1.history)
  const activeIndex = computed(() => store.getters['counter1/activeIndex']);
  
  return {
    history,
    searchVal,
    activeIndex
  }
}
}
</script>

<style scoped>
.history {
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 0.5px solid rgb(120, 164, 230);
  border-radius: 25px;
  outline: none;
  margin-top: 0.6rem;
}
.bottom {
  width: 300px;
  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  max-height: 300px;
  overflow-y: auto;
}
.bold {
  font-weight: bold;
}
</style>