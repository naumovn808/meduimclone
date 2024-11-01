import authApi from '@/api/auth';

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

const actions = {
  register(context, credentials) {
    return new Promise(() => {
      authApi.register(credentials)
      .then(response => response.json())
      .then(data => console.log(data)
      )
    })
    .catch(err => console.error(err))
  },
};

export default {
  state,
  mutations,
  actions,
};
