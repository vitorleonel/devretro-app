<template>
  <main class="flex-1 p-2 overflow-y-auto flex justify-start items-start">
    <BoardColumn v-for="column in columns" :column="column" :key="column._id" />
  </main>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import BoardColumn from "@/components/BoardColumn";

export default Vue.extend({
  components: {
    BoardColumn,
  },

  computed: {
    ...mapState({
      columns: (state) => state.board.data?.columns || [],
    }),
  },
});
</script>
