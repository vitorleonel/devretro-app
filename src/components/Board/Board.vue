<template>
  <main class="flex-1 p-2 overflow-y-auto flex justify-start items-start">
    <BoardColumn
      v-for="column in columns"
      :name="column.name"
      :items="column.items"
      :key="column.id"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import BoardColumn from '@/components/BoardColumn';

export default Vue.extend({
  components: {
    BoardColumn,
  },

  data() {
    return {
      columns: [
        {
          id: 1,
          name: 'Went well',
          items: [
            {
              id: 1,
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            },
          ],
        },
        { id: 2, name: 'To improve', items: [] },
        { id: 3, name: 'Action items', items: [] },
      ],
    };
  },
});
</script>
