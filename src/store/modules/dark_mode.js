const state = {
  dark_mode_on: false,
};

const getters = {
  isDarkModeOn: (state) => state.dark_mode_on,
};

const actions = {
  changeDarkModeActivity({ commit }, status) {
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
