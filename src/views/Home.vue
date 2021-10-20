<template>
  <div class="home">
    <div class="left-part">
      <h1 class="text-h1">Front-end developer</h1>
      <h3 class="text-h3">Oleksii Kharenko</h3>
      <p class="text-home-p">
        You are visiting my portfolio website. Here you can find out all
        information you need to know about me. See my works, even contact me via
        email.
      </p>
      <div class="contact-me-block">
        <router-link to="/contacts" class="contact-me-link">
          <p class="contact-me-link-text">Contact me</p>
          <div class="arrow-link">
            <img
              src="../assets/main_screen/right-chevron.png"
              alt="Arrow right"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div class="right-part">
      <div class="image-container">
        <img src="../assets/main_screen/portfolio.jpg" alt="Portfolio Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  text-align: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 80px;
  .left-part {
    text-align: left;
    .text-home-p {
      padding: 20px 0 0 0;
    }
    .contact-me-block {
      margin-top: 40px;
      .contact-me-link {
        display: flex;
        align-items: center;
        font-size: 18px;
        text-decoration: none;
        color: black;
        .contact-me-link-text {
          white-space: nowrap;
          transition: 0.2s ease-in-out;
        }
        .arrow-link {
          height: 30px;
          width: 30px;
          img {
            height: inherit;
            width: inherit;
            transition: 0.2s ease-in-out;
          }
        }
      }
      .contact-me-link:hover {
        color: var(--contact-me-link-light-mode--hover-color);
        .arrow-link {
          img {
            filter: invert(0.3);
          }
        }
      }
    }
  }
  .right-part {
    .image-container {
      margin: 50px 10px;
      img {
        height: 70vh;
        overflow: hidden;
      }
    }
  }
}

.dark .home {
  .left-part {
    color: var(--default-dark-mode-color);
    .contact-me-block {
      .contact-me-link {
        color: var(--additional-dark-mode-color);
        .arrow-link {
          img {
            filter: invert(0.6);
          }
        }
      }
      .contact-me-link:hover {
        color: var(--additional-dark-mode-hover-color);
        .arrow-link {
          img {
            filter: invert(0.4);
          }
        }
      }
    }
  }
}
</style>
