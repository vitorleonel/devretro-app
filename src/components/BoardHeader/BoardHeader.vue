<template>
  <header
    class="w-full h-16 bg-white px-6 border-b flex items-center justify-between relative"
    v-if="user && board"
  >
    <div class="text-xl">Dev<span class="font-bold">Retro</span></div>

    <h1 class="w-full text-lg text-center absolute -ml-6">
      {{ board.name }}
    </h1>

    <div class="w-8 h-8 bg-gray-300 rounded-full">
      <img :src="user.photo" :alt="user.name" class="rounded-full" />
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.data,
      board: (state) => state.board.data,
    }),
  },
};
</script>
