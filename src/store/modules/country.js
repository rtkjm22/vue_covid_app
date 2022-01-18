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
    count: 1,
  },
  mutations: {
    increment: function (state) {
      state.count++;
    }
  }
}