<template>
  <div class="work-details" v-if="work">
    <div class="work-title">
      <h1>{{ work.work_name }}</h1>
    </div>
    <div class="work-details-block">
      <div class="img-block">
        <img :src="imageUrl" :alt="`${this.work.work_name} Image`" />
      </div>
      <div class="data-block">
        <div class="text-details">
          <p class="details-paragraph">
            {{ work.work_details }}
          </p>
        </div>
        <WebPageLink
          :link="work.link"
          :link_text="linkText"
          :type="'website'"
        />
        <WebPageLink
          v-if="work.git_link"
          :link="work.git_link"
          :link_text="'See on github'"
          :type="'not-link'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WebPageLink from "@/components/WebPageLink.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "WorkDetails",
  data() {
    return {
      work: "",
    };
  },
  components: {
    WebPageLink,
  },
  computed: {
    ...mapGetters(["getWork"]),
    linkText() {
      return this.work.link.split("://")[1];
    },
    imageUrl() {
      return `${this.work.cover_image_type}, ${this.work.cover_image}`;
    },
  },
  methods: {
    ...mapActions(["fetchWork"]),
  },
  watch: {
    getWork() {
      this.work = this.getWork;
    },
  },
  mounted() {
    this.fetchWork({
      language_short: "EN",
      work_id: this.$route.params.id,
    });
  },
};
</script>

<style lang="scss">
.work-details {
  min-height: inherit;
  padding: 0 20px;
  .work-title {
    text-align: center;
    padding-top: 10px;
  }
  .work-details-block {
    padding-top: 20px;
    .img-block {
      img {
        width: 100%;
        max-height: 700px;
      }
    }
    .data-block {
      padding: 20px 60px;
      .details-paragraph {
        text-indent: 45px;
      }
      .website-link-text {
        margin-top: 10px;
      }
    }
  }
}
.dark {
  .work-details {
    .work-details-block {
      .data-block {
        .text-details {
          color: var(--additional-dark-mode-color);
        }
      }
    }
  }
}
</style>
