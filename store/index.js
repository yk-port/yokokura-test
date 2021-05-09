export const state = () => ({
  currentStep: 1,
  steps: [
    { step: 1, input: "", title: "名前入力" },
    { step: 2, input: "", title: "メール入力" },
    { step: 3, input: "", title: "パスワード入力" }
  ]
});

export const getters = {
  currentStep: state => state.currentStep,
  steps: state => state.steps
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
  }
};

export const actions = {};
