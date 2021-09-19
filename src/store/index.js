import { createStore } from "vuex";
import dark_mode from "./modules/dark_mode";

export default createStore({
  modules: {
    dark_mode,
  },
});
