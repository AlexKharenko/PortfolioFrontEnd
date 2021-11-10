<template>
  <div class="admin-page">
    <div class="redirect-btn-block">
      <ButtonRedirect :btn_text="'Create Work'" target_page="/admin/add/work" />
      <ButtonRedirect
        :btn_text="'Add Language'"
        target_page="/admin/add/lang"
      />
    </div>
    <div class="admin-works">
      <WorkItemAdmin
        class="margin-top-10"
        v-for="work in works"
        :key="work.id"
      />
    </div>
  </div>
</template>

<script>
import ButtonRedirect from "@/components/ButtonRedirect.vue";
import WorkItemAdmin from "@/components/WorkItemAdmin.vue";

export default {
  name: "Admin",
  components: {
    ButtonRedirect,
    WorkItemAdmin,
  },
  data() {
    return {
      works: [{ id: 1 }, { id: 2 }],
    };
  },
};
</script>

<style lang="scss">
.admin-page {
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
