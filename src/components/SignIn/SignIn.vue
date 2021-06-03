<template>
  <Loading v-if="authLoading" />

  <div
    class="w-screen h-screen bg-gray-100 flex items-center justify-center absolute z-100"
    v-else
  >
    <div class="w-full max-w-sm mx-auto p-4">
      <Button
        class="bg-gray-700 hover:bg-gray-900 text-white"
        @click="authSignIn"
        >Sign in with your GitHub account</Button
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Loading from "@/components/Loading";
import Button from "@/components/Button";

export default {
  name: "SignIn",

  components: {
    Loading,
    Button,
  },

  computed: {
    ...mapState({
      authLoading: (state) => state.auth.loading,
    }),
  },

  methods: {
    ...mapActions(["authSignIn"]),
  },
};
</script>
