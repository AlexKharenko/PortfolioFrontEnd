import router from "@/router";

const actions = {
  // eslint-disable-next-line no-unused-vars
  async sendEmail({ commit }, data) {
    let response = await fetch(
      `${process.env.VUE_APP_SERVER}/profile/message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.status == 200) {
      response = await response.json();
      return response;
    } else {
      if (response.status == 429) {
        response = await response.json();
        return response;
      }
      if (response.status >= 500) {
        router.push("/505");
      }
    }
  },
};

export default {
  actions,
};
