<template>
  <div class="nav-bar">
    <div class="nav-left-part">
      <router-link to="/">
        <div class="logo">AlexKharenko</div>
      </router-link>
    </div>
    <div class="toggle-btn" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div class="nav-right-part" :class="active ? 'active' : ''">
      <router-link to="/about">
        <p class="nav-link-text">{{ $t("nav_bar.about") }}</p>
      </router-link>
      <router-link to="/projects">
        <p class="nav-link-text">{{ $t("nav_bar.works") }}</p>
      </router-link>
      <router-link to="/contacts">
        <p class="nav-link-text">{{ $t("nav_bar.contacts") }}</p>
      </router-link>
      <router-link v-if="isLoggedIn" to="/admin">
        <p class="nav-link-text">{{ $t("nav_bar.admin") }}</p>
      </router-link>
      <div class="btn-toggle-mode" @click="darkModeClick()"></div>
      <LanguageSelect />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LanguageSelect from "@/components/LanguageSelect.vue";

export default {
  name: "NavBar",
  data() {
    return {
      active: false,
    };
  },
  components: {
    LanguageSelect,
  },
  methods: {
    ...mapActions(["changeDarkModeActivity"]),
    darkModeClick() {
      this.changeDarkModeActivity(!this.isDarkModeOn);
    },
    toggleMenu() {
      this.active = !this.active;
    },
  },
  watch: {
    $route() {
      this.active = false;
    },
  },
  computed: {
    ...mapGetters(["isDarkModeOn", "isLoggedIn"]),
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

  .toggle-btn {
    position: absolute;
    right: 20px;
    top: 19px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    .bar {
      height: 3px;
      width: 100%;
      background-color: black;
      border-radius: 10px;
    }
  }

  .nav-right-part {
    display: flex;
    justify-content: flex-end;
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
      margin-top: 3px;
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

    .toggle-btn {
      .bar {
        background-color: white;
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
@media (max-width: 610px) {
  .nav-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .nav-right-part {
      transition: max-height 0.4s ease-in-out;
      overflow: hidden;
      max-height: 0;
      width: 100%;
      flex-direction: column;
      text-align: center;
      a {
        margin-top: 10px;
      }
      .btn-toggle-mode {
        margin-top: 10px;
        align-self: center;
      }
      .locale-changer {
        padding-top: 10px;
      }
    }
    .nav-right-part.active {
      max-height: 200px;
    }
    .toggle-btn {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>
