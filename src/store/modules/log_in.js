import router from "@/router";

const state = {
  logged_in: false,
  user: { login: "" },
};

const getters = {
  isLoggedIn: (state) => state.logged_in,
  getUser: (state) => state.user,
};

const actions = {
  // eslint-disable-next-line no-unused-vars
  async SignUp({ commit }, data) {
    let response = await fetch(`${process.env.VUE_APP_SERVER}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status == 201) {
      response = await response.json();
      router.push("/login");
      return {};
    } else {
      if (
        (response.status =
          403 && response.message == "Forbiden to create account")
      ) {
        return { forbiden: true };
      }
    }
  },
  async LogIn({ dispatch }, data) {
    let response = await fetch(`${process.env.VUE_APP_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      response = await response.json();
      dispatch("fetchUser");
      router.push("/admin");
      return;
    } else {
      response = await response.json();
      const error = response.message;
      return error;
    }
  },
  async fetchUser({ commit, dispatch }) {
    const res = await fetch(`${process.env.VUE_APP_SERVER}/profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status == 404) {
          router.push("/404");
          return 0;
        }
        if (response.status == 401 || response.status == 403) {
          return response.json();
        }

        if (response.status >= 500) {
          router.push("/505");
          return;
        }
      })
      .catch((error) => {
        console.error(error);
        router.push("/505");
      });
    await commit("setUser", res.user || "");
    dispatch("changeLogInStatus", res.success);
  },
  changeLogInStatus({ commit }, status) {
    commit("setLoggedIn", status);
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setLoggedIn: (state, logged_in) => (state.logged_in = logged_in),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
