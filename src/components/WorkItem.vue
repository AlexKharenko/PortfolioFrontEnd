<template>
  <div class="work-wrapper">
    <div class="work-block">
      <div class="work-img">
        <img :src="imageUrl" alt="Work Image" />
      </div>
      <div class="work-data-block">
        <div class="work-text-block">
          <h3 class="work-title">{{ work.work_name }}</h3>
          <p class="about-work-text">
            {{ work.work_details }}
          </p>
          <WebPageLink
            :link="work.link"
            :link_text="linkText"
            :type="'website'"
          />
        </div>
        <ButtonRedirect
          :btn_text="'About it'"
          :target_page="`/projects/${work.work_id}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRedirect from "@/components/ButtonRedirect.vue";
import WebPageLink from "@/components/WebPageLink.vue";

export default {
  name: "WorkItem",
  props: ["work"],
  data() {
    return {};
  },
  components: {
    ButtonRedirect,
    WebPageLink,
  },
  computed: {
    linkText() {
      return this.work.link.split("://")[1];
    },
    imageUrl() {
      return `${this.work.cover_image_type}, ${this.work.cover_image}`;
    },
  },
};
</script>

<style lang="scss">
.work-wrapper {
  border-bottom: 1px solid var(--additional-dark-mode-color);
  padding-bottom: 20px;
  .work-block {
    display: flex;
    .work-img {
      margin-right: 40px;
      width: 460px;
      height: 240px;
      img {
        width: inherit;
        height: inherit;
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

@media (max-width: 870px) {
  .work-wrapper {
    display: flex;
    justify-content: center;
    .work-block {
      display: block;
      max-height: none;
      width: 480px;
      .work-img {
        width: inherit;
        margin-right: 0;
      }
      .work-data-block {
        padding: 10px 20px;
        height: 240px;
      }
    }
  }
}

@media (max-width: 630px) {
  .work-wrapper {
    .work-block {
      width: 360px;
      .work-img {
        width: inherit;
        height: 180px;
      }
      .work-data-block {
        width: inherit;
      }
    }
  }
}

@media (max-width: 430px) {
  .work-wrapper {
    .work-block {
      width: 240px;
      .work-img {
        width: inherit;
        height: 120px;
      }
      .work-data-block {
        width: inherit;
      }
    }
  }
}
</style>
