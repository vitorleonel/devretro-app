<template>
  <header
    class="w-full h-16 bg-white px-6 border-b flex items-center justify-between relative"
  >
    <div class="text-xl">Dev<span class="font-bold">Retro</span></div>

    <h1 class="w-full text-lg text-center absolute -ml-6">
      {{ !loading ? board.name : "Loading..." }}
    </h1>

    <div v-show="expireIn">Expires {{ expireIn }}</div>
  </header>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default Vue.extend({
  computed: {
    ...mapState({
      loading: (state) => state.board.loading,
      board: (state) => state.board.data,
    }),

    expireIn() {
      if (!this.board) {
        return;
      }

      const boardExpiredIn = dayjs(this.board.createdAt).add(2, "day");
      const current = dayjs();

      return current.to(boardExpiredIn);
    },
  },
});
</script>
