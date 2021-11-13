<template>
  <div class="work-admin-block">
    <div class="work-details-block">
      <div class="work-img">
        <img :src="imageUrl" alt="Work Image" />
      </div>
      <div class="work-data-block">
        <div class="work-text-block">
          <h3 class="work-title">{{ work.work_name }}</h3>
          <p class="about-work-text">
            {{ work.work_details }}
          </p>
          <p>
            {{ work.language_short }}
          </p>
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
    <div class="editor-block margin-top-10">
      <ButtonRedirect :btn_text="'Edit details'" :target_page="editDetails" />
      <ButtonRedirect :btn_text="'Edit links'" :target_page="editLink" />
      <ButtonRedirect :btn_text="'Add details'" :target_page="addDetails" />
      <ButtonFunction :btn_text="'Delete work'" :function_do="callFunction" />
    </div>
  </div>
</template>

<script>
import ButtonRedirect from "@/components/ButtonRedirect.vue";
import ButtonFunction from "@/components/ButtonFunction.vue";
import WebPageLink from "@/components/WebPageLink.vue";
import { mapActions } from "vuex";

export default {
  name: "WorkItem",
  props: ["work"],
  data() {
    return {};
  },
  components: {
    ButtonRedirect,
    WebPageLink,
    ButtonFunction,
  },
  methods: {
    ...mapActions(["deleteWork", "fetchAllWorks"]),
    callFunction() {
      const result = confirm(
        `Do you want to delete work: ${this.work.work_name}?`
      );
      if (result) {
        this.deleteWork({ work_id: this.work.work_id });
        this.fetchAllWorks();
      }
    },
  },
  computed: {
    linkText() {
      return this.work.link.split("://")[1];
    },
    editLink() {
      return `/admin/edit/work?work_id=${this.work.work_id}&language_short=${this.work.language_short}`;
    },
    editDetails() {
      return `/admin/edit/details?work_id=${this.work.work_id}&language_short=${this.work.language_short}`;
    },
    addDetails() {
      return `/admin/add/details?work_id=${this.work.work_id}`;
    },
    imageUrl() {
      return `${this.work.cover_image_type}, ${this.work.cover_image}`;
    },
  },
};
</script>

<style lang="scss">
.work-admin-block {
  border-bottom: 1px solid var(--additional-dark-mode-color);
  padding-bottom: 20px;
  display: flex;
  max-height: 260px;
  justify-content: space-between;
  .editor-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    .btn-function {
      width: 100px;
    }
  }
  .work-details-block {
    display: flex;
    .work-img {
      margin-right: 30px;
      img {
        width: 160px;
        height: 90px;
      }
    }
    .work-data-block {
      .work-text-block {
        .work-title {
          margin-bottom: 15px;
        }
        .about-work-text {
          margin-bottom: 10px;
          font-size: 0.9em;
          overflow: hidden;
          line-height: 1.1em;
          height: 5.3em;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        }
      }
      .btn-redirect {
        margin-top: 30px;
      }
    }
  }
}
</style>
