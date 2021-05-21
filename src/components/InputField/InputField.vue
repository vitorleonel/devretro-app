<template>
  <div class="mb-4 flex flex-col">
    <label v-if="label" :for="name" class="font-semibold mb-1">{{
      label
    }}</label>

    <input
      v-bind="$attrs"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="w-full h-10 px-3 outline-none border hover:border-gray-300"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",

  props: ["label", "name", "value"],
};
</script>
