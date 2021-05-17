export default {
  state: {
    loading: true,
    data: null,
  },

  mutations: {
    setBoard(state, board) {
      state.loading = false;
      state.data = board;
    },
  },
};
