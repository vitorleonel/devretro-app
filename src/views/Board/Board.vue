<template>
  <BoardLayout>
    <Loading v-if="boardLoading" />
    <Board v-else />
  </BoardLayout>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import BoardLayout from "@/layouts/BoardLayout";

import Loading from "@/components/Loading";
import Board from "@/components/Board";

export default {
  components: {
    BoardLayout,
    Loading,
    Board,
  },

  computed: {
    ...mapState({
      boardLoading: (state) => state.board.loading,
    }),
  },

  mounted() {
    this.$socket.on("current-board", (board) => this.setBoard(board));
  },

  methods: {
    ...mapMutations(["setBoard"]),
  },
};
</script>
