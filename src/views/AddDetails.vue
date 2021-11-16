<template>
  <div class="add details">
    <h1>Add work details</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Language</p>
        <CustomSelect
          :items="getAllLanguages"
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
        <ButtonRedirect
          :btn_text="'Add language'"
          :target_page="'/admin/add/lang'"
        />
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
          v-model="work_details"
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
import ButtonRedirect from "@/components/ButtonRedirect.vue";
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
      work_id: this.$route.query.work_id,
      error: "",
    };
  },
  components: {
    ButtonSubmit,
    ButtonRedirect,
    CustomSelect,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getAllLanguages"]),
  },
  validations() {
    return {
      language_id: { required },
      work_name: { required },
    };
  },
  methods: {
    ...mapActions(["addWorkDetails", "fetchAllLanguages"]),
    redirectToAdminIf(message) {
      if (!this.error) {
        alert(message);
        this.$router.push("/admin");
      }
    },
    saveLanguageId(data) {
      this.language_id = data;
    },
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      const data = {
        language_id: this.language_id,
        work_name: this.work_name,
        work_details: this.work_details,
        work_id: this.work_id,
      };
      const { err, message } = await this.addWorkDetails(data);
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
    } else {
      if (!this.$route.query.work_id) {
        this.$router.push("/admin");
        return;
      }
      this.fetchAllLanguages();
    }
  },
};
</script>
