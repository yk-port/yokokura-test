<template>
  <div class="step">STEP {{ step }}</div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.step {
  clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%);
  height: 80px;
  width: 360px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4em;
  margin-bottom: 32px;
}
</style>
