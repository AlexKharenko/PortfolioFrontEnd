<template>
  <div class="wrapper" :class="[isDarkModeOn ? 'dark' : '']">
    <NavBar />

    <div v-if="!isDataUploaded" class="loading">
      <div class="spinner">
        <img src="./assets/main_screen/refresh.png" />
      </div>
    </div>
    <router-view class="main" />
    <Socials />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Socials from "@/components/Socials.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    NavBar,
    Socials,
    Footer,
  },
  computed: {
    ...mapGetters("uploading", ["isDataUploaded"]),
    ...mapGetters(["isDarkModeOn"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  created() {
    if (!this.isLoggedIn) {
      this.fetchUser();
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --default-light-mode-color: #2c3e50;
  --default-dark-mode-color: rgb(224, 222, 222);
  --dark-mode-background: black;
  --contact-me-link-light-mode--hover-color: rgb(80, 80, 80);
  --additional-light-mode-color: rgb(0, 0, 0);
  --additional-light-mode-hover-color: rgb(51, 51, 51);
  --additional-dark-mode-color: rgb(175, 172, 172);
  --additional-dark-mode-hover-color: rgb(141, 141, 141);
  --btn-first-bg: rgb(252, 112, 112);
  --btn-first-hover-bg: rgba(252, 112, 112, 0.836);
  --btn-first-color: rgb(243, 243, 243);
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--default-light-mode-color);
}

.wrapper {
  min-height: 100vh;
  transition: 0.4s ease-in-out;
  .main {
    min-height: calc(100vh - 60px - 40px);
    max-width: 1500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .loading {
    height: calc(100vh - 60px);
    position: fixed;
    top: 60px;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 1;
    .spinner {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      img {
        height: 150px;
        width: 150px;
        filter: invert(1);
        animation: fullRotate 1s ease-in-out infinite;
      }
    }
  }
}
.wrapper.dark {
  background: var(--dark-mode-background);
  color: var(--default-dark-mode-color);
  .loading {
    background-color: var(--dark-mode-background);
    .spinner {
      img {
        filter: invert(0);
      }
    }
  }
}

@keyframes fullRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10px;
}
textarea::-webkit-scrollbar-track {
  background-color: #fff;
}
textarea:hover {
  cursor: auto;
}

.add,
.update,
.login-signup-container {
  min-height: inherit;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  .error-message {
    margin-top: 30px;
    text-align: center;
  }
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    .input-block {
      .form-field-title {
        margin-top: 10px;
        padding-bottom: 2px;
      }
      .form-field {
        width: 400px;
        outline: none;
        border: none;
        border-bottom: 2px solid black;
        padding: 4px 5px;
        background: inherit;
      }
      textarea {
        height: 200px;
        resize: none;
        border: 2px solid black;
      }
    }
    .btn-submit {
      margin-top: 20px;
    }
  }
}
.dark {
  .add,
  .update,
  .login-signup-container {
    form {
      .input-block {
        .form-field {
          color: var(--default-dark-mode-color);
          border-bottom: 2px solid var(--additional-dark-mode-color);
        }
        textarea {
          border: 2px solid var(--additional-dark-mode-color);
        }
      }
    }
  }
}

.margin-top-10 {
  margin-top: 10px;
}
</style>
