<template>
  <div class="container">
    <div class="steps">
      <StepCard v-for="step in steps" :key="step.id" :step="step" />
    </div>
    <InputForm v-if="currentStep === 0" type="text" />
    <InputForm v-if="currentStep === 1" type="email" />
    <InputForm v-if="currentStep === 2" type="password" />
    <ConfirmBtn v-if="currentStep === totalSteps" class="confirm-btn" />
  </div>
</template>

<script>
import StepCard from "@/components/organisms/stepCard.vue";
import InputForm from "@/components/organisms/inputForm.vue";
import ConfirmBtn from "@/components/confirmBtn.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    StepCard,
    InputForm,
    ConfirmBtn
  },
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
