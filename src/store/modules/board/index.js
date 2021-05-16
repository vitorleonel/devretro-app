export default {
  state: {
    loading: true,

    name: null,
    columns: [],
  },

  mutations: {
    setBoard(state, { name, columns }) {
      state.name = name;
      state.columns = columns;
      state.loading = false;
    },
  },
};
