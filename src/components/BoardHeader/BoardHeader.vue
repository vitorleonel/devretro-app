<template>
  <header
    class="w-full h-16 bg-white px-6 border-b flex items-center justify-between relative"
  >
    <div class="text-xl">Dev<span class="font-bold">Retro</span></div>

    <h1 class="w-full text-lg text-center absolute -ml-6">
      {{ !loading ? board.name : "Loading..." }}
    </h1>

    <div
      class="w-8 h-8 bg-green-300 rounded-full flex justify-center items-center"
    >
      <span class="font-semibold">D</span>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState({
      loading: (state) => state.board.loading,
      board: (state) => state.board.data,
    }),
  },
});
</script>
