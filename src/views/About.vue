<template>
  <div class="about">
    <div class="about-me-title">
      <h1>Oleksii Kharenko</h1>
      <h3>Front-end developer</h3>
    </div>
    <div class="about-me-text-block">
      <p class="about-me-paragraph">
        Something about me. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nulla quasi eius dicta, aspernatur ipsam assumenda, magnam,
        debitis esse nobis nisi nesciunt quas enim. Enim vitae nemo minus!
        Omnis, dolorem laboriosam!
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  padding: 20px 80px;
  .about-me-title {
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
      color: var(--default-dark-mode-color);
    }
    .about-me-text-block {
      .about-me-paragraph {
        color: var(--additional-dark-mode-color);
      }
    }
  }
}
@media (max-width: 700px) {
  .about {
    padding: 20px 20px;
    .about-me-title {
      text-align: center;
      margin-bottom: 30px;
    }
    .about-me-text-block {
      .about-me-paragraph {
        text-indent: 45px;
      }
    }
  }
}
</style>
