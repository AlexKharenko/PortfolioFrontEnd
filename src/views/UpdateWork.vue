<template>
  <div class="update work">
    <h1>Update work</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Link</p>
        <input
          v-model.trim="link"
          class="form-field"
          type="text"
          name="link"
          placeholder="Work link"
          id="link"
        />
      </div>
      <div class="input-block">
        <p class="form-field-title">Github link</p>
        <input
          v-model.trim="git_link"
          class="form-field"
          type="text"
          name="git_link"
          placeholder="Github link"
          id="gitlink"
        />
      </div>
      <ButtonSubmit :btn_text="'Add details'" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "Update work",
  data() {
    return {
      link: "",
      git_link: "",
      error: "",
    };
  },
  components: {
    ButtonSubmit,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["LogIn"]),
    async handleSubmit() {
      if (this.link == "" && this.git_link == "") {
        this.error = "All fields shouldn`t be empty!";
        return;
      }
      const data = {
        login: this.login,
        password: this.password,
      };
      const err = await this.LogIn(data);
      this.error = err;
    },
  },
  // watch: {
  //   isLoggedIn() {
  //     if (!this.isLoggedIn) {
  //       this.$router.push("/");
  //     }
  //   },
  // },
  // mounted() {
  //   if (!this.isLoggedIn) {
  //     this.$router.push("/");
  //   }
  // },
};
</script>
