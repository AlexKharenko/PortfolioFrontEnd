<template>
  <div class="locale-changer">
    <select
      v-model="$i18n.locale"
      @change="setLocalStorageLanguage($i18n.locale)"
    >
      <option
        v-for="(lang, i) in $i18n.availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ languageUpperCase(lang) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageSelect",
  data() {
    return {};
  },
  methods: {
    setLocalStorageLanguage(lang) {
      localStorage.setItem("language", JSON.stringify(lang));
    },
    languageUpperCase(name) {
      return name.toUpperCase();
    },
  },
};
</script>

<style lang="scss">
.locale-changer {
  margin-left: 20px;
  select {
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
}

.dark {
  .locale-changer {
    select {
      option {
        background-color: var(--dark-mode-background);
      }
    }
  }
}
</style>
