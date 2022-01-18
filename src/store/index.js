import { createStore } from "vuex";
import country from "./modules/country"

const store = createStore({
  modules: {
    country,
  },
})

export default store