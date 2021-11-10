<template>
  <div class="add details">
    <h1>Add work details</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Language</p>
        <CustomSelect
          :items="languages"
          obj_key="language"
          add_option_name="language"
          @SelectResult="saveLanguageId"
        />
        <p
          v-if="v$.language_id.$dirty && v$.language_id.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
        <ButtonFunction :btn_text="'Add language'" :function_do="work" />
      </div>
      <div class="input-block">
        <p class="form-field-title">Work title</p>
        <input
          v-model.trim="work_name"
          class="form-field"
          :class="v$.work_name.$error ? 'invalid-input' : ''"
          type="text"
          name="work_name"
          placeholder="Work title"
          id="work_name"
        />
        <p
          v-if="v$.work_name.$dirty && v$.work_name.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
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
import { required } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import ButtonFunction from "@/components/ButtonFunction.vue";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  name: "AddLanguage",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      language_id: "",
      work_name: "",
      work_details: "",
      languages: [
        { id: 1, language: "english" },
        { id: 2, language: "spanish" },
      ],
      error: "",
    };
  },
  components: {
    ButtonSubmit,
    ButtonFunction,
    CustomSelect,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  validations() {
    return {
      language_id: { required },
      work_name: { required },
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    saveLanguageId(data) {
      this.language_id = data;
    },
    work() {
      console.log("click");
    },
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
