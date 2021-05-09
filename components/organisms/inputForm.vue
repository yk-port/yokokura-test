<template>
  <div class="form">
    <div class="form__title">
      <label>{{ title }}</label>
    </div>
    <div class="form__input">
      <input :type="type" :value="inputValue" @input="updateInputValue" />
    </div>
    <div class="form__btn">
      <button v-if="currentStep !== 0" @click="back">
        Back
      </button>
      <button
        v-if="currentStep !== totalSteps"
        :disabled="disabled"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    updateInputValue(e) {
      this.$store.dispatch("updateInputValue", {
        input: e.target.value,
        currentStep: this.currentStep
      });
    },
    next() {
      this.$store.dispatch("nextStep");
    },
    back() {
      this.$store.dispatch("backStep");
    }
  },
  computed: {
    ...mapGetters(["currentStep", "title", "inputValue", "totalSteps"]),
    disabled() {
      return this.inputValue ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  height: 240px;
  width: 540px;
  border: 1px solid #3b8070;
  padding: 32px;
  &__title {
    font-size: 1.8em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }
  &__input {
    input {
      width: 100%;
      font-size: 1.4em;
      padding: 0.5em 1em;
    }
  }
  &__btn {
    text-align: center;
    margin: 24px 0;
    button {
      font-size: 1.4em;
      font-weight: bold;
      padding: 0.2em 1em;
    }
  }
}
</style>
