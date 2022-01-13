<template>
  <div class="card">
    <h1>hoge</h1>
    {{ hogeArr }}
  </div>
</template>

<script>
import { onMounted, onUpdated } from '@vue/runtime-core'
export default {
  name: 'Card',
  props: {
    countryArr: {
      type: Array
    }
  },
  data(props) {
    let hogeArr;
    onMounted(() => {
      hogeArr = props;
      console.log(hogeArr);
    });
    return {
      hogeArr,
    }
  }
}


</script>

<style scoped>

</style>