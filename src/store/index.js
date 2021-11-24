import { createStore } from "vuex";
import dark_mode from "./modules/dark_mode";
import log_in from "./modules/log_in";
import works from "./modules/works";
import contact from "./modules/contact";
import uploading from "./modules/uploading";

export default createStore({
  modules: {
    dark_mode,
    log_in,
    works,
    contact,
    uploading,
  },
});
