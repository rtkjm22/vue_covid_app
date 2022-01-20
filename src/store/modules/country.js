export default {
  state: {
    message: 'hello vuex',
    hoge: 'hogehogehogehogehogehgoheoghoehgoehgoehgoe',
    targetCountries: [
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
    ],
    selectedCountries: [
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
    ],
    count: 1,
  },
  mutations: {
    increment: function (state) {
      state.count++;
    },
    setSelectCountries : (state, arr) => {
      state.selectedCountries.length = 0;
      for (let i=0;i<arr.length;i++) {
        state.selectedCountries.push(arr[i]);
      }
    },
    setTargetCountries: (state, arr) => {
      state.targetCountries.length = 0;
      for (let i=0;i<arr.length;i++) {
        state.targetCountries.push(arr[i]);
      }
    }
  },
  actions: {
    increment (context) {
      context.commit('increment');
    },
    setSelectCountries: (context, arr) => {
      context.commit('setSelectCountries', arr);
    },
    setTargetCountries: (context, arr) => {
      context.commit('setTargetCountries', arr);
    }
  }
}