<template>
  <div class="admin-page">
    <div class="redirect-btn-block">
      <ButtonRedirect :btn_text="'Create Work'" target_page="/admin/add/work" />
      <ButtonRedirect
        :btn_text="'Add Language'"
        target_page="/admin/add/lang"
      />
      <ButtonFunction :btn_text="'Logout'" :function_do="logout" />
    </div>
    <h3 v-if="getAllWorks.length == 0" class="no-works">No Works</h3>
    <div v-if="getAllWorks.length > 0" class="admin-works">
      <WorkItemAdmin
        class="margin-top-10"
        v-for="work in getAllWorks"
        :key="work.id"
        :work="work"
      />
    </div>
  </div>
</template>

<script>
import ButtonRedirect from "@/components/ButtonRedirect.vue";
import ButtonFunction from "@/components/ButtonFunction.vue";
import WorkItemAdmin from "@/components/WorkItemAdmin.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Admin",
  components: {
    ButtonRedirect,
    ButtonFunction,
    WorkItemAdmin,
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getAllWorks"]),
  },
  methods: {
    ...mapActions(["LogIn", "fetchAllWorks", "changeLogInStatus", "logout"]),
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
      this.fetchAllWorks();
    }
  },
};
</script>

<style lang="scss">
.admin-page {
  .no-works {
    text-align: center;
  }
  .redirect-btn-block {
    grid-gap: 20px;
    padding: 40px 0;
    display: flex;
    justify-content: center;
  }
  .admin-works {
    padding: 0 40px;
  }
}
</style>
