<template>
  <div class="contacts">
    <div class="contatcs-me-title">
      <h1>{{ $t("contacts.h1") }}</h1>
      <h3>
        {{ $t("contacts.cv_before") }}
        <a
          href="https://drive.google.com/file/d/1h3IER6MGKDiaYNUrDKvEaYepigN1Z6qi/view?usp=sharing"
          target="_blank"
          >{{ $t("contacts.cv_name") }}</a
        >
      </h3>
      <p class="email">oleksiikharenko@gmail.com</p>
    </div>
    <h3 class="response-result" v-if="error">{{ error }}</h3>
    <div class="email-form">
      <form v-on:submit.prevent="handleSubmit">
        <div class="field-block">
          <p class="field-title">{{ $t("contacts.email") }}</p>
          <input
            class="input-field"
            type="email"
            name="email_from"
            id="email_from"
            v-model.trim="email_from"
            :placeholder="$t('contacts.email_place')"
          />
          <p
            v-if="v$.email_from.$dirty && v$.email_from.required.$invalid"
            class="invalid-message"
          >
            {{ $t("form.required") }}
          </p>
        </div>
        <div class="field-block">
          <p class="field-title">{{ $t("contacts.subject") }}</p>
          <input
            class="input-field"
            type="text"
            name="subject"
            id="subject"
            v-model.trim="subject"
            :placeholder="$t('contacts.subject')"
          />
          <p
            v-if="v$.subject.$dirty && v$.subject.required.$invalid"
            class="invalid-message"
          >
            {{ $t("form.required") }}
          </p>
        </div>
        <div class="field-block">
          <p class="field-title">{{ $t("contacts.message") }}</p>
          <textarea
            class="input-field"
            type="text"
            name="message"
            id="message"
            v-model="message"
            @keydown="filterSpaceIfNeeded"
            @input="checkMaxWords()"
            @paste="limitPasting"
            :placeholder="$t('contacts.message_place')"
          />
          <p
            v-if="v$.message.$dirty && v$.message.required.$invalid"
            class="invalid-message"
          >
            {{ $t("form.required") }}
          </p>
          <div class="words-counter-block">
            <div class="words-counter-text">{{ $t("contacts.words") }}:</div>
            <span>{{ words_left_counter }}</span>
          </div>
        </div>
        <ButtonSubmit :btn_text="$t('contacts.btn_text')" />
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapActions } from "vuex";
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "Contacts",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email_from: "",
      subject: "",
      message: "",
      max_words: 200,
      words_left_counter: 200,
      can_type: true,
      error: "",
    };
  },
  components: {
    ButtonSubmit,
  },
  validations() {
    return {
      email_from: { required },
      subject: { required },
      message: { required },
    };
  },
  methods: {
    ...mapActions(["sendEmail"]),
    async handleSubmit() {
      this.v$.$touch();
      if (this.v$.$error) {
        return 0;
      }

      const data = {
        from: this.email_from,
        subject: this.subject,
        message: this.message,
      };
      const { err, message } = await this.sendEmail(data);
      this.error = err || message;
    },
    countWords(text) {
      text = text.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
      text = text.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
      text = text.replace(/\n/gi, " "); // exclude newline with a start spacing
      return text.split(" ").filter(function (str) {
        return str != "";
      }).length;
    },
    checkMaxWords() {
      this.words_left_counter = this.max_words - this.countWords(this.message);
      if (this.words_left_counter > 0) {
        this.can_type = true;
        return;
      }
      this.can_type = false;
    },
    filterSpaceIfNeeded($event) {
      if (!this.can_type) {
        let keyCode = $event.keyCode ? $event.keyCode : $event.which;
        if (keyCode == 32) {
          console.log("space");
          $event.preventDefault();
        }
      }
    },
    limitPasting($event) {
      if (this.can_type) {
        let clipboardData = $event.clipboardData || window.clipboardData;
        let pastedData = clipboardData.getData("Text");
        if (this.words_left_counter - this.countWords(pastedData) < 0) {
          $event.stopPropagation();
          $event.preventDefault();
          alert("Can't paste, too long!");
        }
      }
      if (!this.can_type) {
        $event.preventDefault();
        alert("Can't paste!");
      }
    },
  },
};
</script>

<style lang="scss">
.contacts {
  min-height: inherit;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  .response-result {
    text-align: center;
  }
  .contatcs-me-title {
    text-align: center;
    margin-bottom: 30px;
  }
  .email {
    padding-top: 20px;
  }
  .email-form {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    .field-block {
      .field-title {
        margin-top: 10px;
        padding-bottom: 2px;
      }
      .input-field {
        width: 400px;
        outline: none;
        border: none;
        border-bottom: 2px solid black;
        padding: 4px 5px;
        background: inherit;
      }
      #message {
        height: 200px;
        resize: none;
        border: 2px solid black;
      }
      .words-counter-block {
        display: flex;
        .words-counter-text {
          margin-right: 5px;
        }
      }
    }
    .btn-submit {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.dark {
  .contacts {
    .email-form {
      .field-block {
        .input-field {
          color: var(--default-dark-mode-color);
          border-bottom: 2px solid var(--additional-dark-mode-color);
        }
        #message {
          border: 2px solid var(--additional-dark-mode-color);
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .contacts {
    padding: 20px 20px;
  }
}
@media (max-width: 490px) {
  .contacts {
    .email-form {
      .field-block {
        .input-field {
          width: 250px;
        }
      }
      .btn-submit {
        margin-top: 10px;
      }
    }
  }
}
</style>
