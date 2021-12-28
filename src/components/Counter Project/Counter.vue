<template>
  <div class="container">
    <h1>Vuex Counter</h1>
    <h1 class="counter"> {{ counter }} </h1>
    <div class="btns">
      <button @click="removeFromCounter">-</button>
      <input v-model="inputValue" type="number" name="" id="">
      <button @click="addToCounter">+</button>
    </div>
    <div class="random">
      <button @click="addRandomNumber">
        Add By Random Number
      </button>
    </div>
  </div>

</template>

<script>import { mapState, useStore } from "vuex"
import { computed, ref } from '@vue/reactivity'
import { counterMutationTypes } from "../../store/modules/counter/counter.mutationTypes"

export default {
  name: "Counter",
  setup() {
    const inputValue = ref(1)
    const store = useStore()
    console.log(store)
    //state
    const counter = computed(() => store.state.counter1.counter)
    //mutations
    const addToCounter = () => store.commit(`counter1/${counterMutationTypes.ADD_COUNTER}`, parseInt(inputValue.value))
    const removeFromCounter = () => store.commit(`counter1/${counterMutationTypes.REMOVE_COUNTER}`, parseInt(inputValue.value))

    // asynchronous actions
    const addRandomNumber = () => store.dispatch('counter1/addRandomNumber', {
      amount: 10
    })
    return {
      counter,
      inputValue,
      addToCounter,
      removeFromCounter,
      addRandomNumber
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  margin-top: 1rem;
}
.counter {
  font-size: 5rem;
}
.btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: ceter;
}
.btns button {
  color: #000;
  font-size: 1.25rem;
  background: rgb(209, 212, 212);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
}
.btns input {
  padding: 0.5rem;
  border: 0.5px solid rgb(120, 164, 230);
  border-radius: 25px;
}
.btns input:focus {
  outline: 0.3px solid rgb(114, 176, 226);
}
.btns button:active {
  transform: scale(0.98);
}
.random button {
  color: rgb(255, 255, 255);
  font-size: 1rem;
  background: rgb(41, 95, 212);
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>