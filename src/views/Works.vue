<template>
  <div class="works">
    <div class="works-title">
      <h1>Works</h1>
    </div>
    <div class="works-container">
      <WorkItem />
      <WorkItem />
    </div>
  </div>
</template>

<script>
import WorkItem from "@/components/WorkItem.vue";

export default {
  name: "Works",
  components: {
    WorkItem,
  },
};
</script>

<style lang="scss">
.works {
  padding: 20px 80px;
  .works-title {
    text-align: center;
    margin-bottom: 30px;
  }
  .works-container {
    display: grid;
    grid-row-gap: 20px;
  }
}
</style>
