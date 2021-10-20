<template>
  <div class="contacts">
    <div class="contatcs-me-title">
      <h1>Feel Free To Text Me</h1>
      <h3>Watch my <a href="#" target="_blank">CV</a> here</h3>
    </div>
    <div class="email-form">
      <form v-on:submit.prevent="onSubmit">
        <div class="field-block">
          <p class="field-title">Email</p>
          <input
            class="input-field"
            type="email"
            name="email_from"
            id="email_from"
            v-model="email_from"
            placeholder="Write your email"
          />
        </div>
        <div class="field-block">
          <p class="field-title">Subject</p>
          <input
            class="input-field"
            type="text"
            name="subject"
            id="subject"
            v-model="subject"
            placeholder="Subject"
          />
        </div>
        <div class="field-block">
          <p class="field-title">Message</p>
          <textarea
            class="input-field"
            type="text"
            name="message"
            id="message"
            v-model="message"
            @keydown="filterSpaceIfNeeded"
            @input="checkMaxWords()"
            @paste="limitPasting"
            placeholder="Write the message"
          />
          <div class="words-counter-block">
            <div class="words-counter-text">Words:</div>
            <span>{{ words_left_counter }}</span>
          </div>
        </div>
        <ButtonSubmit :btn_text="'Send message'" />
      </form>
    </div>
  </div>
</template>

<script>
import ButtonSubmit from "@/components/ButtonSubmit.vue";

export default {
  name: "Contacts",
  data() {
    return {
      email_from: "",
      subject: "",
      message: "",
      max_words: 200,
      words_left_counter: 200,
      can_type: true,
    };
  },
  components: {
    ButtonSubmit,
  },
  methods: {
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
  .contatcs-me-title {
    text-align: center;
    margin-bottom: 30px;
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
</style>
