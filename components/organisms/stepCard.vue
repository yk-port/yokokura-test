<template>
  <div class="card">
    <StepLabel :step="step" />
    <StepResult :step="step" />
  </div>
</template>

<script>
import StepLabel from "@/components/atoms/stepLabel.vue";
import StepResult from "@/components/molecules/stepResult.vue";

export default {
  components: {
    StepLabel,
    StepResult
  },
  props: {
    step: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 0 16px;
}
</style>
