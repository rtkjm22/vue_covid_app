<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

const country = reactive(store.state.country);
const targetCountries = reactive(store.state.country.targetCountries);
let checkedArr = reactive([]);

const checkedItem = (e) => {
  let checkText = e.target.textContent;

  if (!checkedArr.includes(checkText)) {
    checkedArr.push(checkText)
  } else {
    const checkIndex = checkedArr.indexOf(checkText);
    checkedArr.splice(checkIndex, 1);
  }

  store.dispatch('setSelectCountries', checkedArr);
}
</script>


<template>
<div class="bl_form">
  <ul class="targetCountries_wrapper">
    <li v-for="(item, index) in targetCountries" :key="index" class="targetCountries_item">
      <input type="checkbox" :id="'country_'+ item" :vlaue="item">
      <label :for="'country_' + item" @click="checkedItem">{{ item }}</label>
    </li>
  </ul>
</div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/Form';
</style>