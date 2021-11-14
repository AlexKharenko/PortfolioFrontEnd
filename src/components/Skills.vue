<template>
  <div class="skills-wrapper">
    <h3>{{ $t("about.skills") }}:</h3>
    <div class="skills-icons-block">
      <div class="img-container">
        <img src="../assets/skills_icons/vue.png" alt="Vue icon" />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/html.png"
          alt="HTML5 icon"
        />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/css-3.png"
          alt="Css3 icon"
        />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/js.png"
          alt="JavaScript icon"
        />
      </div>
      <div class="img-container">
        <img src="../assets/skills_icons/node-js.png" alt="Node.js icon" />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/postgre.png"
          alt="PostgreSQL icon"
        />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/python.png"
          alt="Python icon"
        />
      </div>
      <div class="img-container">
        <img
          class="filter"
          src="../assets/skills_icons/git.png"
          alt="Git icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss">
.skills-wrapper {
  .skills-icons-block {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-gap: 20px;
    justify-content: center;
    .img-container {
      img {
        transition: 0.4s ease-in-out;
        height: auto;
        width: 100%;
      }
    }
  }
}
.dark {
  .skills-wrapper {
    .skills-icons-block {
      .img-container {
        img.filter {
          filter: invert(1);
        }
      }
    }
  }
}

@media (max-width: 610px) {
  .skills-wrapper {
    .skills-icons-block {
      grid-template-columns: repeat(4, 80px);
    }
  }
}
@media (max-width: 430px) {
  .skills-wrapper {
    .skills-icons-block {
      grid-template-columns: repeat(2, 80px);
    }
  }
}
</style>
