<template>
  <div class="login-signup-container">
    <h1>Sign up</h1>
    <div v-if="forbiden" class="error-message">
      Forbiden to create an account
    </div>
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
        />
        <p
          v-if="v$.login.$dirty && v$.login.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
        <p
          v-if="v$.login.$dirty && v$.login.minLength.$invalid"
          class="invalid-message"
        >
          Should be at least 3 long
        </p>
        <p
          v-if="v$.login.$dirty && v$.login.maxLength.$invalid"
          class="invalid-message"
        >
          Should be shorter than 30 long
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
        <p
          v-if="
            v$.password.$dirty &&
            (v$.password.maxLength.$invalid || v$.password.minLength.$invalid)
          "
          class="invalid-message"
        >
          Password should be between 6 and 18 long
        </p>
      </div>
      <div class="input-block">
        <p class="form-field-title">Password confirmation</p>
        <input
          v-model.trim="password_confirm"
          :type="show_password ? 'text' : 'password'"
          class="form-field"
          :class="v$.password_confirm.$error ? 'invalid-input' : ''"
          name="password_confirm"
          placeholder="Password confirmation"
          id="password_confirm"
        />
        <p
          v-if="
            v$.password_confirm.$dirty && v$.password_confirm.required.$invalid
          "
          class="invalid-message"
        >
          Required field
        </p>
        <p
          v-if="
            v$.password_confirm.$dirty && v$.password_confirm.sameAs.$invalid
          "
          class="invalid-message"
        >
          Should match the password
        </p>
      </div>
      <div class="show-password-block margin-top-10">
        <input type="checkbox" id="show_password" v-model="show_password" />
        <label for="show_password">Show Password</label>
      </div>
      <ButtonSubmit :btn_text="'Sign up'" :disabled="forbiden" />
      <p class="margin-top-10">
        If you are already registered, please
        <router-link to="/login">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength, sameAs } from "@vuelidate/validators";
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
      password_confirm: "",
      forbiden: false,
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
      login: { required, minLength: minLength(3), maxLength: maxLength(30) },
      password: { required, minLength: minLength(6), maxLength: maxLength(18) },
      password_confirm: { required, sameAs: sameAs(this.password) },
    };
  },
  methods: {
    ...mapActions(["changeLogInStatus", "SignUp"]),
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      const data = {
        login: this.login,
        password: this.password,
        password_confirm: this.password_confirm,
      };
      const { forbiden } = await this.SignUp(data);
      this.forbiden = forbiden || false;
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
