<template>
  <SignIn v-if="!isAuthenticated" />
  <router-view v-else></router-view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/analytics";

import SignIn from "@/components/SignIn";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID,
};

export default {
  components: {
    SignIn,
  },

  computed: {
    ...mapGetters(["isAuthenticated"]),
  },

  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  },

  mounted() {
    firebase.auth().onAuthStateChanged(this.authUser);
  },

  methods: {
    ...mapActions(["authUser"]),
  },
};
</script>
