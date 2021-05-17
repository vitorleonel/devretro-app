<template>
  <div class="flex-1 p-4">
    <div class="mb-4 flex justify-between items-center">
      <h2 class="font-semibold">{{ name }}</h2>
      <i
        class="far fa-trash-alt text-gray-500 hover:text-red-500 cursor-pointer"
      ></i>
    </div>

    <div
      @click="textarea.opened = !textarea.opened"
      class="group bg-gray-200 hover:bg-gray-400 cursor-pointer text-center p-1"
    >
      <i
        v-if="!textarea.opened"
        class="far fa-plus-square text-gray-500 group-hover:text-gray-700"
      ></i>
      <i
        v-if="textarea.opened"
        class="far fa-minus-square text-gray-500 group-hover:text-gray-700"
      ></i>
    </div>

    <ul class="mt-4">
      <li v-if="textarea.opened" class="p-1 bg-gray-700 mb-4 flex flex-row">
        <textarea
          v-model="textarea.description"
          class="flex-1 h-12 p-3 resize-none outline-none block"
          placeholder="Enter your text..."
        ></textarea>

        <div
          class="w-10 bg-gray-700 cursor-pointer flex justify-center items-center"
        >
          <i class="fas fa-check text-white"></i>
        </div>
      </li>

      <li
        v-for="item in items"
        :key="item._id"
        class="p-4 bg-gray-700 text-white mb-4"
      >
        {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BoardColumn",

  props: {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      textarea: {
        description: "",
        opened: false,
      },
    };
  },

  watch: {
    "textarea.opened": function () {
      if (this.textarea.opened) {
        return;
      }

      this.textarea.description = "";
    },
  },
});
</script>
