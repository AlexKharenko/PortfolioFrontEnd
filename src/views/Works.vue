<template>
  <div class="works">
    <div class="works-title">
      <h1>Works</h1>
    </div>
    <div class="works-container">
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
  .about-me-text-block {
    .about-me-paragraph {
      text-indent: 45px;
    }
  }
}
.dark {
  .about {
    .about-me-title {
      color: rgb(224, 222, 222);
    }
    .about-me-text-block {
      .about-me-paragraph {
        color: rgb(175, 172, 172);
      }
    }
  }
}
</style>
