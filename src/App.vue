
<template>
  <ul>
    <li v-for="item in countryArr" :key="item.Country">
      {{ item.Country }}
      {{ item.NewConfirmed }}
      {{ item.NewDeaths }}
      {{ item.TotalConfirmed }}
      {{ item.TotalDeaths }}
    </li>
  </ul>
  <Card countryArr=countryArr />
</template>

<script>
import axios from 'axios';

import Card from "./components/Card.vue";


export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return  {
      countryArr: []
    }
  },
  async created() {
    const { data } = await axios.get("/summary")
    .then(res => {
      const countries = [
        'Japan',
        'United States of America',
        'China',
        'Canada',
        'India',
        'Korea (South)',
        'United Kingdom',
        'Mexico',
        'Russian Federation',
        'South Africa',
        'Viet Nam',
        'Denmark',
        'Indonesia',
        'Spain',
        'Austria',
        'Italy',
        'New Zealand',
        'Hungary',
        'Australia',
        'Greece',
        'Singapore',
        'Thailand',
        'Egypt',
        'Brazil',
        'Germany',
        'France',
        'Philippines',
        'Taiwan, Republic of China',
      ];
      const countriesData = res.data.Countries;

      // for (let i=0;i<countries.length;i++) {
      //   let data = res.data.Countries.find(e => e.Country === countries[i]);
      //   arr.push(data);
      // }
      countriesData.forEach(d => {
        const {
          Country,
          NewConfirmed,
          NewDeaths,
          TotalConfirmed,
          TotalDeaths
        } = d;

        const countryInfo = {
          Country: Country,
          NewConfirmed: NewConfirmed,
          NewDeaths: NewDeaths,
          TotalConfirmed: TotalConfirmed,
          TotalDeaths: TotalDeaths
        }
        this.countryArr.push(countryInfo);
      });      
      return res;
    })
  }
}
</script>

<style>

</style>
