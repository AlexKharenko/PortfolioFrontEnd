const state = {
  dark_mode_on: JSON.parse(localStorage.getItem("dark_mode")) || false,
};

const getters = {
  isDarkModeOn: (state) => state.dark_mode_on,
};

const actions = {
  changeDarkModeActivity({ commit }, status) {
    localStorage.setItem("dark_mode", JSON.stringify(status));
    commit("setDarkModeActivity", status);
  },
};

const mutations = {
  setDarkModeActivity: (state, status) => (state.dark_mode_on = status),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
