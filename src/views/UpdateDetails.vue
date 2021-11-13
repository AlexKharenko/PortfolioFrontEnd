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
          v-model.trim="work_details"
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
import { mapActions, mapGetters } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "AddLanguage",
  data() {
    return {
      work_name: "",
      work_details: "",
      work_id: this.$route.query.work_id,
      language_short: this.$route.query.language_short,
      error: "",
    };
  },
  components: {
    ButtonSubmit,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getWork"]),
  },
  methods: {
    ...mapActions(["LogIn", "fetchWork", "updateWorkDetails"]),
    redirectToAdminIf(success, message) {
      if (success) {
        alert(message);
        this.$router.push("/admin");
      }
    },
    async handleSubmit() {
      if (this.work_name == "" && this.work_details == "") {
        this.error = "All fields shouldn`t be empty!";
        return;
      }
      const data = {
        work_name: this.work_name,
        work_details: this.work_details,
        work_id: this.work_id,
        language_id: this.getWork.language_id,
      };
      const { err, message, success } = await this.updateWorkDetails(data);
      this.error = err;
      this.redirectToAdminIf(success, message);
    },
  },
  watch: {
    isLoggedIn() {
      if (!this.isLoggedIn) {
        this.$router.push("/");
      }
    },
    getWork() {
      this.work_name = this.getWork.work_name;
      this.work_details = this.getWork.work_details;
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    } else {
      if (!this.$route.query.work_id || !this.$route.query.language_short) {
        this.$router.push("/admin");
        return;
      }
      this.fetchWork({
        language_short: this.language_short,
        work_id: this.work_id,
      });
    }
  },
};
</script>
