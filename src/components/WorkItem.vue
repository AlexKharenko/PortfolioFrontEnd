<template>
  <div class="work-block">
    <div class="work-img">
      <img src="../assets/Screenshot.png" alt="Work Image" />
    </div>
    <div class="work-data-block">
      <div class="work-text-block">
        <h3 class="work-title">Work</h3>
        <p class="about-work-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          tenetur. Nemo beatae maxime aliquam mollitia incidunt sit at tempore
          doloribus, dolore accusamus delectus impedit nisi iste quod totam
          nobis aliquid. Cum amet corporis ipsum natus aut, obcaecati molestias
          ea. Nisi quas expedita accusamus quod minima, tempore natus molestiae
          excepturi. Tempore repellat beatae eos rem harum illo quia, blanditiis
          expedita corrupti. Tenetur blanditiis quod assumenda aperiam
          doloremque nulla soluta saepe ab numquam dolorum recusandae ducimus
          qui aspernatur, sapiente commodi explicabo! Cupiditate deserunt
          quaerat provident esse ad ab accusantium dolores quia illo!
        </p>
        <WebPageLink :link="'#'" :link_text="'work.com'" :type="'website'" />
      </div>
      <ButtonRedirect :btn_text="'About it'" :target_page="'/works/1#'" />
    </div>
  </div>
</template>

<script>
import ButtonRedirect from "@/components/ButtonRedirect.vue";
import WebPageLink from "@/components/WebPageLink.vue";

export default {
  name: "WorkItem",
  data() {
    return {};
  },
  components: {
    ButtonRedirect,
    WebPageLink,
  },
};
</script>

<style lang="scss" scoped>
.work-block {
  border-bottom: 1px solid var(--additional-dark-mode-color);
  padding-bottom: 20px;
  display: flex;
  max-height: 260px;
  .work-img {
    margin-right: 40px;
    img {
      width: 480px;
      height: 240px;
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
</style>
