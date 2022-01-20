<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
const store = useStore();

const selectedCountries = reactive(store.state.country.selectedCountries);
let countryArr = reactive([]);
let getDate = ref();

// const UpdateArr = async () => {
//   await axios.get("/summary")
//     .then(res => {
//       countryArr.length = 0;
//       const date = res.data.Date;
//       getDate.value = dayjs(date).utc(true).format("YYYY年MM月DD日 HH時mm分");
//       return res.data.Countries;
//     })
//     .then(res => {
//       let countryNameArr = [];
//       for (let i=0;i<res.length;i++) {
//         countryNameArr.push(res[i].Country);
//       }
//       store.dispatch('setTargetCountries', countryNameArr);

//       for (let i=0;i<selectedCountries.length;i++) {
//         let item = res.find(e => e.Country === selectedCountries[i]);
//         countryArr.push(item);
//       }
//     })
// }
// UpdateArr();


const UpdateArr = async () => {
  await axios.get("/summary")
    .then(res => {
      countryArr.length = 0;
      const date = res.data.Date;
      let data = res.data.Countries;
      // console.log('これは'+selectedCountries);
      for (let i=0;i<selectedCountries.length;i++) {
        let item = data.find(e => e.Country === selectedCountries[i]);
        countryArr.push(item);
      }
      getDate.value = dayjs(date).utc(true).format("YYYY年MM月DD日 HH時mm分");
    });
}
UpdateArr();

const reUpdate = () => {
  UpdateArr()
  .then(() => {
    console.log('変更完了です。');
  })
}
</script>


<template>
  <p class="bl_date">{{ getDate }}時点のデータ</p>
  <button class="bl_btn" @click="reUpdate">Update</button>
  <ul class="bl_cards">
    <li class="bl_cards_item" v-for="(item, index) in countryArr" :key="index">
      <p class="bl_cardIndex">{{ parseInt(index, 10) + 1 }}</p>
      <p><span>国名</span> {{ item.Country }}</p>
      <p><span>新規感染者数</span> {{ item.NewConfirmed }}人</p>
      <p><span>累積感染者数</span> {{ item.TotalConfirmed }}人</p>
      <p><span>新規死者数</span> {{ item.NewDeaths }}人</p>
      <p><span>累積死者数</span> {{ item.TotalDeaths }}人</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/Card"
</style>