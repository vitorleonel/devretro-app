<template>
  <button
    v-bind="$attrs"
    class="w-full h-10 px-3 focus:outline-none flex justify-center items-center"
  >
    <slot />
  </button>
</template>
