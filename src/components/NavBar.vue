<template>
  <div class="nav-bar">
    <div class="nav-left-part">
      <router-link to="/">
        <div class="logo">AlexKharenko</div>
      </router-link>
    </div>
    <div class="nav-right-part">
      <router-link to="/about">
        <p class="nav-link-text">About me</p>
      </router-link>
      <router-link to="/works">
        <p class="nav-link-text">Works</p>
      </router-link>
      <router-link to="/contacts">
        <p class="nav-link-text">Contacts</p>
      </router-link>
      <div class="btn-toggle-mode" @click="darkModeClick()"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["changeDarkModeActivity"]),
    darkModeClick() {
      this.changeDarkModeActivity(!this.isDarkModeOn);
    },
  },
  computed: {
    ...mapGetters(["isDarkModeOn"]),
  },
};
</script>

<style lang="scss">
.nav-bar {
  position: sticky;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px 20px;
  align-items: center;
  font-size: 18px;
  background: white;
  transition: 0.4s ease-in-out;
  border-bottom: 1px black solid;
  z-index: 100;
  a {
    text-decoration: none;
    color: black;
    &.router-link-exact-active {
      color: grey;
    }
  }
  .nav-left-part {
    display: flex;
    justify-content: left;
    a {
      color: white;
      .logo {
        font-size: 24px;
        padding: 5px;
        background: black;
      }
    }
  }
  .nav-right-part {
    display: flex;
    justify-content: right;
    a {
      margin-left: 20px;
      border-bottom: 2px solid transparent;
      .nav-link-text {
        white-space: nowrap;
      }
    }
    a:hover {
      border-bottom: 2px solid black;
    }
    .btn-toggle-mode {
      margin-left: 20px;
      display: flex;
      width: 34px;
      height: 20px;
      border: 2px solid;
      border-radius: 9em;
      position: relative;
      cursor: pointer;
    }
    .btn-toggle-mode::before {
      transition: left 0.4s ease-in-out;
      content: "";
      display: block;
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #000;
      border-radius: 50%;
      top: 2px;
      left: 2px;
    }
  }
}

.dark {
  .nav-bar {
    background: black;
    border-bottom-color: white;
    a {
      color: white;
      .logo {
        color: white;
      }
      &.router-link-exact-active {
        color: grey;
      }
    }
    .nav-right-part {
      a:hover {
        border-bottom: 2px solid transparent;
        color: #ced4da;
      }
      .btn-toggle-mode {
        background: black;
        border-color: white;
      }
      .btn-toggle-mode::before {
        left: 16px;
        background: white;
      }
    }
  }
}
</style>
