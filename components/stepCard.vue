<template>
  <div class="card">
    <p class="card__status">{{ title }}：{{ inputStatus }}</p>
    <p class="card__result">{{ input }}</p>
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
.card {
  height: 160px;
  width: 342px;
  border: 1px solid #3b8070;
  padding: 32px;
  &__status {
    font-size: 1.4em;
    margin-bottom: 8px;
  }
  &__result {
    font-size: 1.6em;
    font-weight: bold;
  }
}
</style>
