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
      work_id: this.$route.query.work_id,
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
    ...mapActions(["fetchWork", "updateWork"]),
    redirectToAdminIf(message) {
      if (!this.error) {
        alert(message);
        this.$router.push("/admin");
      }
    },
    async handleSubmit() {
      if (this.link == "" && this.git_link == "") {
        this.error = "All fields shouldn`t be empty!";
        return;
      }
      const data = {
        link: this.link,
        git_link: this.git_link,
        work_id: this.work_id,
      };
      const { err, message } = await this.updateWork(data);
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
    getWork() {
      this.link = this.getWork.link;
      this.git_link = this.getWork.git_link;
    },
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push("/");
    } else {
      if (!this.$route.query.work_id || !this.$route.query.language_id) {
        this.$router.push("/admin");
        return;
      }
      this.fetchWork({
        language_id: this.$route.query.language_id,
        work_id: this.work_id,
      });
    }
  },
};
</script>
