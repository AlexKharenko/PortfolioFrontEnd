<template>
  <div class="login-signup-container">
    <h1>Log in</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Login</p>
        <input
          v-model.trim="login"
          class="form-field"
          :class="v$.login.$error ? 'invalid-input' : ''"
          type="text"
          name="login"
          placeholder="Login"
          id="login"
        />
        <p
          v-if="v$.login.$dirty && v$.login.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
      </div>
      <div class="input-block">
        <p class="form-field-title">Password</p>
        <input
          v-model.trim="password"
          :type="show_password ? 'text' : 'password'"
          class="form-field"
          :class="v$.password.$error ? 'invalid-input' : ''"
          name="password"
          placeholder="Password"
          id="password"
        />
        <p
          v-if="v$.password.$dirty && v$.password.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
      </div>
      <div class="show-password-block margin-top-10">
        <input type="checkbox" id="show_password" v-model="show_password" />
        <label for="show_password">Show Password</label>
      </div>
      <ButtonSubmit :btn_text="'Log in'" />
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "LogIn",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      login: "",
      password: "",
      error: "",
      show_password: false,
    };
  },
  components: {
    ButtonSubmit,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  validations() {
    return {
      login: { required },
      password: { required },
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      const data = {
        login: this.login,
        password: this.password,
      };
      const err = await this.LogIn(data);
      this.error = err;
    },
  },
  watch: {
    isLoggedIn() {
      if (this.isLoggedIn) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/");
    }
  },
};
</script>
