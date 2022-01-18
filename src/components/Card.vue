<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);


// const targetCountries = [
//   'Japan',
//   'United States of America',
//   'China',
//   'Canada',
//   'India',
//   'Korea (South)',
//   'United Kingdom',
//   'Mexico',
//   'Russian Federation',
//   'South Africa',
//   'Viet Nam',
//   'Denmark',
//   'Indonesia',
//   'Spain',
//   'Austria',
//   'Italy',
//   'New Zealand',
//   'Hungary',
//   'Australia',
//   'Greece',
//   'Singapore',
//   'Thailand',
//   'Egypt',
//   'Brazil',
//   'Germany',
//   'France',
//   'Philippines',
//   'Taiwan, Republic of China',
// ];


const targetCountries = $store.state.targetCountries;
console.log(targetCountries);

// const countryArr = reactive([]);
// let getDate = ref();
// const UpdateArr = async () => {
//   await axios.get("/summary")
//     .then(res => {
//       const date = res.data.Date;
//       let data = res.data.Countries;
//       for (let i=0;i<targetCountries.length;i++) {
//         let item = data.find(e => e.Country === targetCountries[i]);
//         countryArr.push(item);
//       }
//       console.log(date);
//       getDate.value = dayjs(date).utc(true).format("YYYY年MM月DD日 HH時mm分");
//     });
// }
// UpdateArr();
// const reUpdate = () => {
//   UpdateArr();
//   console.log('更新しました。');
// }




// サンプル配列
const getDate = "YYYY年MM月DD日 HH時mm分";
const countryArr = {
  0: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  1: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  2: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  3: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  4: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  5: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  6: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  7: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  8: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  9: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  10: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  11: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  12: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  13: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  14: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  15: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  16: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
  17: {
    Country: 'hoge',
    NewConfirmed : 'fuga',
    NewDeaths: 'piyo',
    TotalConfirmed: 'buz',
    TotalDeaths: 'boke',
  },
};


</script>


<template>
  <p class="bl_date">{{ getDate }}時点のデータ</p>
  <button class="bl_btn" @click="reUpdate">Update</button>
  <ul class="bl_cards">
    <li class="bl_cards_item" v-for="(item, index) in countryArr" :key="index">
      <p class="bl_cardIndex">{{ parseInt(index, 10) + 1 }}</p>
      <p><span>Country</span> {{ item.Country }}</p>
      <p><span>NewConfirmed</span> {{ item.NewConfirmed }}</p>
      <p><span>TotalConfirmed</span> {{ item.TotalConfirmed }}</p>
      <p><span>NewDeaths</span> {{ item.NewDeaths }}</p>
      <p><span>TotalDeaths</span> {{ item.TotalDeaths }}</p>
    </li>
  </ul>
  <p>{{ $store.state.targetCountries[0] }}</p>
</template>

<style scoped>
.bl_date {
  font-size: 20px;
  text-align: center;
  margin: 50px auto;
}

.bl_btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #41B883;
  border: 1px solid transparent;
  padding: 20px 30px;
  font-size: 20px;
  color: white;
  transition: .3s all;
  border-radius: 5px;
  cursor: pointer;
}
.bl_btn:hover {
  background: white;
  border: 1px solid #41B883;
  color: #41B883;
}

.bl_cards {
  width: 80%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 20px;
  justify-content: center;
  margin: 0 auto;
}
.bl_cards_item {
  position: relative;
  background-color: #41B883;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 40px 30px 30px 40px;
  justify-content: center;
  border-radius: 5px;
  box-shadow: #87bdb3 1px 1px 1px 1px;
}
.bl_cards_item > p {
  color: white;
  margin: 0 0 10px;
}
.bl_cards_item span {
  font-weight: bold;
  display: block;
}
.bl_cardIndex {
  font-size: 30px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -15px;
  left: -10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: #41B883 !important;
  /* border: 1px solid #41B883; */
}

</style>