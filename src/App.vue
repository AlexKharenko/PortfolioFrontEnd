<template>
  <div class="wrapper" :class="[isDarkModeOn ? 'dark' : '']">
    <NavBar />
    <router-view class="main" />
    <Socials />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Socials from "@/components/Socials.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    Socials,
  },
  computed: {
    ...mapGetters(["isDarkModeOn"]),
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
    min-height: calc(100vh - 65px);
    max-width: 1500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
.wrapper.dark {
  background: var(--dark-mode-background);
  color: var(--default-dark-mode-color);
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
</style>
