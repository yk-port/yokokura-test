export const state = () => ({
  currentStep: 1,
  steps: [
    { step: 1, input: "", title: "名前入力" },
    { step: 2, input: "", title: "メール入力" },
    { step: 3, input: "", title: "パスワード入力" }
  ]
});

export const getters = {};

export const mutations = {
  increment(state) {
    state.counter++;
  }
};

export const actions = {};
