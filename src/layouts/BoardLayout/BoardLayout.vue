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

Vue.prototype.$socket = SocketIOClient("http://localhost:8080");

export default Vue.extend({
  name: "BoardLayout",

  components: {
    BoardHeader,
  },
});
</script>
