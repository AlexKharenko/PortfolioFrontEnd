<template>
  <div class="works">
    <div class="works-title">
      <h1>{{ $t("works.title") }}</h1>
    </div>
    <h3 v-if="getAllWorks.length == 0" class="no-works">
      {{ $t("works.no_works") }}
    </h3>
    <div v-if="getAllWorks.length > 0" class="works-container">
      <WorkItem v-for="work in getAllWorks" :key="work.id" :work="work" />
    </div>
  </div>
</template>

<script>
import WorkItem from "@/components/WorkItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Works",
  components: {
    WorkItem,
  },
  computed: {
    ...mapGetters(["getAllWorks"]),
    upperLanguage() {
      return this.$i18n.locale.toUpperCase();
    },
  },
  methods: {
    ...mapActions(["fetchAllWorksByLang"]),
  },
  watch: {
    "$i18n.locale": function () {
      this.fetchAllWorksByLang({ language_short: this.upperLanguage });
    },
  },
  mounted() {
    this.fetchAllWorksByLang({ language_short: this.upperLanguage });
  },
};
</script>

<style lang="scss">
.works {
  padding: 20px 80px;
  .no-works {
    text-align: center;
  }
  .works-title {
    text-align: center;
    margin-bottom: 30px;
  }
  .works-container {
    display: grid;
    grid-row-gap: 20px;
  }
}
@media (max-width: 700px) {
  .works {
    padding: 20px 80px;
    .works-container {
      display: grid;
      grid-row-gap: 20px;
      align-items: center;
    }
  }
}
@media (max-width: 520px) {
  .works {
    padding: 20px 20px;
  }
}
</style>
