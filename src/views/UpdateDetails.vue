<template>
  <div class="update details">
    <h1>Update work details</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Work title</p>
        <input
          v-model.trim="work_name"
          class="form-field"
          type="text"
          name="work_name"
          placeholder="Work title"
          id="work_name"
        />
      </div>
      <div class="input-block">
        <p class="form-field-title">Work details</p>
        <textarea
          class="form-field"
          type="text"
          name="work_details"
          id="work_details"
          placeholder="Write the work details"
        />
      </div>
      <ButtonSubmit :btn_text="'Add details'" />
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "AddLanguage",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      work_name: "",
      work_details: "",
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
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      if (this.work_name == "" && this.work_details == "") {
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
