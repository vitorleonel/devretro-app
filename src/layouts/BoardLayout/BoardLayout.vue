<template>
  <div class="h-screen flex flex-col">
    <AppHeader />

    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import AppHeader from '@/components/AppHeader';

export default Vue.extend({
  name: 'BoardLayout',

  components: {
    AppHeader,
  },
});
</script>
