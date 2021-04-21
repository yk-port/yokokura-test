<template>
  <div class="container">
    <div class="steps">
      <div class="step">
        <StepLabel step="1" />
        <StepCard :input="name" title="名前入力" />
      </div>
      <div class="step">
        <StepLabel step="2" />
        <StepCard :input="email" title="メールアドレス" />
      </div>
      <div class="step">
        <StepLabel step="3" />
        <StepCard :input="password" title="パスワード" />
      </div>
    </div>
    <InputForm
      v-if="currentStep === 1"
      label="name"
      title="名前入力"
      :step="currentStep"
      @handleNext="submitName"
      @handleBack="currentStep--"
    />
    <InputForm
      v-if="currentStep === 2"
      label="email"
      title="メールアドレス入力"
      :step="currentStep"
      @handleNext="submitEmail"
      @handleBack="currentStep--"
    />
    <InputForm
      v-if="currentStep === 3"
      label="password"
      title="パスワード入力"
      :step="currentStep"
      @handleNext="submitPassword"
      @handleBack="currentStep--"
    />
    <SubmitBtn v-if="" btnLabel="Submit" />
  </div>
</template>

<script>
import StepLabel from "@/components/stepLabel.vue";
import StepCard from "@/components/stepCard.vue";
import InputForm from "@/components/inputForm.vue";
import SubmitBtn from "@/components/submitBtn.vue";

export default {
  components: {
    StepLabel,
    StepCard,
    InputForm,
    SubmitBtn
  },
  data() {
    return {
      currentStep: 1,
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    submitName(inputText) {
      this.name = inputText;
      this.currentStep++;
    },
    submitEmail(inputText) {
      this.email = inputText;
      this.currentStep++;
    },
    submitPassword(inputText) {
      this.password = inputText;
      this.currentStep++;
    }
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
