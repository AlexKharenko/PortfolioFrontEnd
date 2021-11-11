<template>
  <div class="add language">
    <h1>Add language</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Language</p>
        <input
          v-model.trim="language"
          class="form-field"
          :class="v$.language.$error ? 'invalid-input' : ''"
          type="text"
          name="language"
          placeholder="Language"
          id="language"
        />
        <p
          v-if="v$.language.$dirty && v$.language.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
      </div>
      <div class="input-block">
        <p class="form-field-title">Language short</p>
        <input
          @input="upper()"
          v-model.trim="language_short"
          class="form-field"
          :class="v$.language_short.$error ? 'invalid-input' : ''"
          type="text"
          name="language_short"
          placeholder="Language short"
          id="language_short"
        />
        <p
          v-if="v$.language_short.$dirty && v$.language_short.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
        <p
          v-if="
            v$.language_short.$dirty &&
            (v$.language_short.maxLength.$invalid ||
              v$.language_short.minLength.$invalid)
          "
          class="invalid-message"
        >
          The length should be 2 symbols.
        </p>
      </div>
      <ButtonSubmit :btn_text="'Add language'" />
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "AddLanguage",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      language_short: "",
      language: "",
      error: "",
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
      language_short: {
        required,
        maxLength: maxLength(2),
        minLength: minLength(2),
      },
      language: { required },
    };
  },
  methods: {
    ...mapActions(["addLanguage"]),
    redirectToAdminIf(message) {
      if (!this.error) {
        alert(message);
        this.$router.push("/admin");
      }
    },
    upper() {
      this.language_short = this.language_short.toUpperCase();
    },
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      const data = {
        language_short: this.language_short,
        language: this.language,
      };
      const { err, message } = await this.addLanguage(data);
      this.error = err;
      this.redirectToAdminIf(message);
    },
  },
  watch: {
    isLoggedIn() {
      if (!this.isLoggedIn) {
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    }
  },
};
</script>
