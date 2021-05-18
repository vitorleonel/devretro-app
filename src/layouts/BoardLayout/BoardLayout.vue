<template>
  <div class="h-screen flex flex-col">
    <BoardHeader />

    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import SocketIOClient from "socket.io-client";

import BoardHeader from "@/components/BoardHeader";

export default {
  name: "BoardLayout",

  components: {
    BoardHeader,
  },

  created() {
    const { id: boardId } = this.$route.params;

    Vue.prototype.$socket = SocketIOClient(
      `http://localhost:3000/boards-${boardId}`,
      {
        query: `boardId=${boardId}`,
      }
    );
  },
};
</script>
