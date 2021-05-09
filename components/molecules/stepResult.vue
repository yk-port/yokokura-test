<template>
  <div class="result">
    <p class="result__status">{{ step.title }}：{{ inputStatus }}</p>
    <p class="result__text">{{ step.input }}</p>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    inputStatus() {
      return this.step.input ? "入力済" : "未入力";
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
