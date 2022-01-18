<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const count = ref(store.state.country.count);

const increment = () => {
  store.commit('increment');
  console.log('更新しました');
  
}

</script>


<template>
<div class="bl_form">
  <label><input type="checkbox" name="country" value="japan">日本</label>
</div>
<p>{{ count }}</p>
<button @click="increment">increment</button>
</template>


<style scoped>

</style>