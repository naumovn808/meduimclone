const state = {
  isSubmiting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmiting = true;
  },
  registerEnd(state) {
    state.isSubmitting = false;
  },
};

export default {
  state,
  mutations,
};
