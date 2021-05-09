<template>
  <div class="container">
    <div class="steps">
      <StepCard
        v-for="step in steps"
        :key="step.id"
        :step="step.id"
        :input="step.input"
        :title="step.title"
      />
    </div>
    <InputForm
      v-if="currentStep === 1"
      label="steps[0].input"
      title="名前入力"
      type="text"
      :step="currentStep"
      @handleNext="submitName($event)"
      @handleBack="currentStep--"
    />
    <InputForm
      v-if="currentStep === 2"
      label="steps[1].input"
      title="メールアドレス入力"
      type="email"
      :step="currentStep"
      @handleNext="submitEmail($event)"
      @handleBack="currentStep--"
    />
    <InputForm
      v-if="currentStep === 3"
      label="steps[2].input"
      title="パスワード入力"
      type="password"
      :step="currentStep"
      @handleNext="submitPassword($event)"
      @handleBack="currentStep--"
    />
  </div>
</template>

<script>
import StepCard from "@/components/organisms/stepCard.vue";
import InputForm from "@/components/organisms/inputForm.vue";
import SubmitBtn from "@/components/submitBtn.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    StepCard,
    InputForm,
    SubmitBtn
  },
  methods: {
    ...mapMutations(["submitName", "submitEmail", "submitPassword"])
  },
  computed: {
    ...mapGetters(["currentStep", "steps"])
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
</style>
