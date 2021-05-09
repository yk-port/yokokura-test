<template>
  <div class="container">
    <h1>入力結果</h1>
    <p>{{ steps }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentStep", "steps", "totalSteps"])
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.steps {
  display: flex;
  margin-bottom: 80px;
}
.confirm-btn {
  margin-top: 40px;
}
</style>
