<template>
  <div class="form">
    <div class="form__title">
      <label :for="label">{{ title }}</label>
    </div>
    <div class="form__input">
      <input type="text" :id="label" v-model="inputText" />
    </div>
    <div class="form__btn">
      <button v-if="step !== 1" type="submit" @click="submitBack">
        Back
      </button>
      <button
        v-if="step !== 3"
        :disabled="disabled"
        type="submit"
        @click="submitNext"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    step: {
      type: Number,
      default: ""
    }
  },
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    submitBack() {
      this.$emit("handleBack");
      this.inputText = "";
    },
    submitNext() {
      this.$emit("handleNext", this.inputText);
      this.inputText = "";
    }
  },
  computed: {
    disabled() {
      return this.inputText ? false : true;
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
