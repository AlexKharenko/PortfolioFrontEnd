import { createStore } from "vuex";
import dark_mode from "./modules/dark_mode";
import log_in from "./modules/log_in";

export default createStore({
  modules: {
    dark_mode,
    log_in,
  },
});
