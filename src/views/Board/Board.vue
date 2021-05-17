<template>
  <BoardLayout>
    <Board />
  </BoardLayout>
</template>

<script>
import Vue from "vue";
import { mapMutations } from "vuex";
import SocketIOClient from "socket.io-client";

import BoardLayout from "@/layouts/BoardLayout";
import Board from "@/components/Board";

export default Vue.extend({
  components: {
    BoardLayout,
    Board,
  },

  created() {
    const { id: boardId } = this.$route.params;

    this.$socket = SocketIOClient(`http://localhost:3000/boards-${boardId}`, {
      query: `boardId=${boardId}`,
    });
  },

  mounted() {
    this.$socket.on("connection", (board) => this.setBoard(board));
  },

  methods: {
    ...mapMutations(["setBoard"]),
  },
});
</script>
