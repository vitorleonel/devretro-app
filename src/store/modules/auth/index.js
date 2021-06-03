import firebase from "firebase/app";

const extractUser = (user) =>
  user
    ? {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
        isAnonymous: user.isAnonymous,
      }
    : null;

export default {
  state: {
    loading: true,
    data: null,
  },

  mutations: {
    setAuth(state, auth) {
      state.loading = false;
      state.data = auth;
    },
  },

  actions: {
    authSignIn() {
      const provider = new firebase.auth.GithubAuthProvider();

      firebase.auth().signInWithPopup(provider);
    },

    authUser({ commit }, user) {
      commit("setAuth", extractUser(user));
    },
  },

  getters: {
    isAuthenticated(state) {
      return !!state.data && !state.loading;
    },
  },
};
