<template>
  <BoardLayout>
    <Board />
  </BoardLayout>
</template>

<script>
import { mapMutations } from "vuex";

import BoardLayout from "@/layouts/BoardLayout";
import Board from "@/components/Board";

export default {
  components: {
    BoardLayout,
    Board,
  },

  mounted() {
    this.$socket.on("current-board", (board) => this.setBoard(board));
  },

  methods: {
    ...mapMutations(["setBoard"]),
  },
};
</script>
