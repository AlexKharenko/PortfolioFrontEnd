<template>
  <div class="work-block">
    <div class="work-img">
      <img src="../assets/main_screen/portfolio.jpg" alt="Work Image" />
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
        <a class="website-link" href="#" target="_blank">
          <p class="website-link-text">work.com</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  name: "WorkItem",
  data() {
    return {};
  },
  // methods: {
  //   ...mapActions(["changeDarkModeActivity"]),
  //   darkModeClick() {
  //     this.changeDarkModeActivity(!this.isDarkModeOn);
  //   },
  // },
  // computed: {
  //   ...mapGetters(["isDarkModeOn"]),
  // },
};
</script>

<style lang="scss">
.work-block {
  display: flex;
  max-height: 240px;
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
        overflow: hidden;
        line-height: 1em;
        max-height: 5em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
      .website-link {
        color: black;
      }
    }
  }
}
</style>
