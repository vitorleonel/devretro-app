<template>
  <div class="h-screen flex flex-col">
    <BoardHeader />

    <slot />
  </div>
</template>

<script>
import Vue from "vue";

import BoardHeader from "@/components/BoardHeader";

export default Vue.extend({
  name: "BoardLayout",

  components: {
    BoardHeader,
  },
});
</script>
