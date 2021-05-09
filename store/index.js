export const state = () => ({
  currentStep: 0,
  steps: [
    { step: 1, input: "", title: "名前入力" },
    { step: 2, input: "", title: "メール入力" },
    { step: 3, input: "", title: "パスワード入力" }
  ]
});

export const getters = {
  currentStep: state => state.currentStep,
  steps: state => state.steps,
  title: state => state.steps[state.currentStep].title,
  inputValue: state => state.steps[state.currentStep].input,
  totalSteps: state => state.steps.length - 1,
  isFullInputed: state => {
    const ele = state.steps.find(step => (step.input = ""));
    return ele ? false : true;
  }
};

export const mutations = {
  submitName(state, inputText) {
    console.log(inputText);
    state.steps[0].input = inputText;
    state.currentStep++;
  },
  submitEmail(state, inputText) {
    state.steps[1].input = inputText;
    state.currentStep++;
  },
  submitPassword(state, inputText) {
    state.steps[2].input = inputText;
    state.currentStep++;
  },
  updateInputValue(state, { inputText, currentStep }) {
    state.steps[currentStep].input = inputText;
  },
  nextStep(state) {
    state.currentStep++;
  },
  backStep(state) {
    state.currentStep--;
  }
};

export const actions = {
  submitName({ commit }, inputText) {
    commit("submitName", inputText);
  },
  submitEmail({ commit }, inputText) {
    commit("submitEmail", inputText);
  },
  submitPassword({ commit }, inputText) {
    commit("submitPassword", inputText);
  },
  updateInputValue({ commit }, value) {
    commit("updateInputValue", {
      inputText: value.input,
      currentStep: value.currentStep
    });
  },
  nextStep({ commit }) {
    commit("nextStep");
  },
  backStep({ commit }) {
    commit("backStep");
  }
};
