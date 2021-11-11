<template>
  <div class="add work">
    <h1>Add work</h1>
    <div v-if="error" class="error-message">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <div class="input-block">
        <p class="form-field-title">Language</p>
        <CustomSelect
          :items="getAllLanguages"
          class="form-field"
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
        <div class="btn-style margin-top-10 center">
          <ButtonRedirect
            class=""
            :btn_text="'Add Language'"
            target_page="/admin/add/lang"
          />
        </div>
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
      <div class="input-block">
        <p class="form-field-title">Link</p>
        <input
          v-model.trim="link"
          class="form-field"
          :class="v$.link.$error ? 'invalid-input' : ''"
          type="text"
          name="link"
          placeholder="Work link"
          id="link"
        />
        <p
          v-if="v$.link.$dirty && v$.link.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
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
      <ImageUpload
        class="form-field"
        @UploadImage="SaveImageData"
        @isUploadedImage="isUploadedImage"
      >
        <p
          v-if="v$.image.$dirty && v$.image.required.$invalid"
          class="invalid-message"
        >
          Required field
        </p>
      </ImageUpload>

      <ButtonSubmit :btn_text="'Add work'" :disabled="disabled_btn" />
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
import ImageUpload from "@/components/ImageUpload.vue";

export default {
  name: "AddWork",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      work_name: "",
      work_details: "",
      language_id: "",
      link: "",
      git_link: "",
      image: "",
      image_type: "",
      disabled_btn: false,
      error: "",
    };
  },
  components: {
    ButtonSubmit,
    CustomSelect,
    ImageUpload,
    ButtonRedirect,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getAllLanguages"]),
  },
  validations() {
    return {
      work_name: { required },
      language_id: { required },
      link: { required },
      image: { required },
      image_type: { required },
    };
  },
  methods: {
    ...mapActions(["LogIn", "fetchAllLanguages", "createWork"]),
    redirectToAdminIf(message) {
      if (!this.error) {
        alert(message);
        this.$router.push("/admin");
      }
    },
    saveLanguageId(data) {
      this.language_id = data;
    },
    SaveImageData(data) {
      this.image_type = data.image_type;
      this.image = data.image;
    },
    isUploadedImage(data) {
      if (!data) {
        this.disabled_btn = true;
        return;
      }
      this.disabled_btn = false;
    },
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }
      if (this.disabled_btn) {
        return;
      }
      const data = {
        work_name: this.work_name,
        work_details: this.work_details,
        language_id: this.language_id,
        link: this.link,
        git_link: this.git_link,
        image: this.image,
        image_type: this.image_type,
      };
      const { error, message } = await this.createWork(data);
      this.error = error;
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
    this.fetchAllLanguages();
  },
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
}
</style>
