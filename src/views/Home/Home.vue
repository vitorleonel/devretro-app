<template>
  <BoardLayout>
    <Board />
  </BoardLayout>
</template>

<script lang="ts">
import Vue from 'vue';

import BoardLayout from '@/layouts/BoardLayout';
import Board from '@/components/Board';

export default Vue.extend({
  components: {
    BoardLayout,
    Board,
  },
});
</script>
