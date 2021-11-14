<template>
  <div class="about">
    <div class="about-me-title">
      <h1>Oleksii Kharenko</h1>
      <h3>Front-end developer</h3>
    </div>
    <div class="about-me-text-block">
      <p class="about-me-paragraph">
        {{ $t("about.main_message") }}
      </p>
      <Skills />
      <div class="list-wrapper">
        <h3>{{ $t("about.education.title") }}:</h3>
        <div class="list-block">
          <div
            class="list"
            v-for="(education, i) in $i18n.messages[$i18n.locale].about
              .education.education_array"
            :key="i"
          >
            <p class="education-gen">
              <span class="university-title">{{ education.university }}</span>
              <span class="city"> ,{{ education.city }}</span>
              <span class="degree"> - {{ education.degree }}</span>
            </p>
            <p class="period">{{ education.period }}</p>
          </div>
        </div>
      </div>
      <div class="list-wrapper">
        <h3>{{ $t("about.languages.title") }}:</h3>
        <div class="list-block">
          <div
            class="list"
            v-for="(language, i) in $i18n.messages[$i18n.locale].about.languages
              .languages_array"
            :key="i"
          >
            <p class="language">
              {{ language.lang }} - {{ language.lang_level }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  name: "About",
  components: {
    Skills,
  },
};
</script>

<style lang="scss">
.about {
  padding: 20px 80px;
  .about-me-title {
    text-align: center;
    margin-bottom: 30px;
  }
  .about-me-text-block {
    h3 {
      margin: 30px 20px;
    }
    .about-me-paragraph {
      text-indent: 45px;
    }
    .list-wrapper {
      .list-block {
        .list {
          .education-gen {
            .university-title {
              font-weight: 600;
            }
            .degree {
              font-style: italic;
            }
          }
          .period {
            margin-top: 10px;
            color: var(--additional-dark-mode-color);
          }
          .language {
            margin-top: 5px;
          }
        }
      }
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
