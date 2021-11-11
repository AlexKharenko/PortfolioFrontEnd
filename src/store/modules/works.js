/* eslint-disable no-unused-vars */
// import router from "@/router";

const state = {
  languages: [],
  works: [],
  work: "",
};

const getters = {
  getAllLanguages: (state) => state.languages,
  getAllWorks: (state) => state.works,
  getWork: (state) => state.work,
};

const actions = {
  async fetchAllLanguages({ commit }) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/get/alllang`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.status == 200) {
      response = await response.json();
      await commit("setLanguages", response.data);
    } else {
      response = await response.json();
      if (response.status === 404) {
        await commit("setLanguages", []);
      }
    }
  },
  async createWork({ commit }, data) {
    let response = await fetch(`${process.env.VUE_APP_SERVER}/works/add/work`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (response.status == 201) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
  async addLanguage({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/add/language`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (response.status == 201) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
  async addWorkDetails({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/add/details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (response.status == 201) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
  async fetchAllWorks({ commit }) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/get/allworks`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.status == 200) {
      response = await response.json();
      await commit("setWorks", response.data);
    } else {
      response = await response.json();
      if (response.status === 404) {
        await commit("setWorks", []);
      }
    }
  },
  async fetchAllWorksByLang({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/get/works`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      response = await response.json();
      await commit("setWorks", response.data);
    } else {
      response = await response.json();
      if (response.status === 404) {
        await commit("setWorks", []);
      }
    }
  },
  async fetchWork({ commit }, data) {
    let response = await fetch(`${process.env.VUE_APP_SERVER}/works/get/work`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      response = await response.json();
      await commit("setWork", response.data);
    } else {
      response = await response.json();
      if (response.status === 404) {
        await commit("setWork", "");
      }
    }
  },
  async updateWorkDetails({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/update/details`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
  async updateWork({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/update/work`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
  async deleteWork({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/works/update/work`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      response = await response.json();
      return response;
    } else {
      response = await response.json();
      return response;
    }
  },
};

const mutations = {
  setLanguages: (state, languages) => (state.languages = languages),
  setWorks: (state, works) => (state.works = works),
  setWork: (state, work) => (state.work = work),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
