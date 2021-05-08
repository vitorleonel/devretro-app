<template>
  <header
    class="w-full h-16 bg-white px-6 border-b flex items-center justify-between relative"
  >
    <div class="text-xl">Dev<span class="font-bold">Retro</span></div>

    <h1 class="w-full text-lg text-center absolute -ml-6">
      {{ !loading ? name : "Loading..." }}
    </h1>

    <div class="w-8 h-8 bg-gray-300 rounded-full">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQH4P8V0_z5RVg/profile-displayphoto-shrink_400_400/0/1559000494131?e=1625702400&v=beta&t=szp3RcR-4plRgE-4FH34Z6yWx9GR4LlxtNaL3tp0SyI"
        alt="Vitor Leonel"
        class="rounded-full"
      />
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
      name: (state) => state.board.name,
    }),
  },
});
</script>
