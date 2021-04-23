<template>
  <div class="result">
    <p class="result__status">{{ title }}：{{ inputStatus }}</p>
    <p class="result__text">{{ input }}</p>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    inputStatus() {
      return this.input ? "入力済" : "未入力";
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  height: 160px;
  width: 342px;
  border: 1px solid #3b8070;
  padding: 32px;
  &__status {
    font-size: 1.4em;
    margin-bottom: 8px;
  }
  &__text {
    font-size: 1.6em;
    font-weight: bold;
    word-wrap: break-word;
  }
}
</style>
