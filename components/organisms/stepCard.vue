<template>
  <div class="card">
    <StepLabel :step="step" />
    <StepResult :input="input" :title="title" />
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
      type: Number,
      default: ""
    },
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
  margin: 0 16px;
}
</style>
