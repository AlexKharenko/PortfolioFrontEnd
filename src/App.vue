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

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  min-height: 100vh;
  transition: 0.4s ease-in-out;
  .main {
    max-width: 1500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
.wrapper.dark {
  background: black;
}
</style>
