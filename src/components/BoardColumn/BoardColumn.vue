<template>
  <div class="flex-1 p-4">
    <div class="mb-4 flex justify-between items-center">
      <h2 class="font-semibold">{{ name }}</h2>
      <i
        class="far fa-trash-alt text-gray-500 hover:text-red-500 cursor-pointer"
      ></i>
    </div>

    <div
      @click="openedForm = !openedForm"
      class="group bg-gray-200 hover:bg-gray-400 cursor-pointer text-center p-1"
    >
      <i
        v-if="!openedForm"
        class="far fa-plus-square text-gray-500 group-hover:text-gray-700"
      ></i>
      <i
        v-if="openedForm"
        class="far fa-minus-square text-gray-500 group-hover:text-gray-700"
      ></i>
    </div>

    <ul class="mt-4">
      <li v-if="openedForm" class="p-1 bg-gray-700 mb-4">
        <form method="post" class="flex flex-row" @submit.prevent="addCard">
          <textarea
            v-model="newCard"
            class="flex-1 h-12 p-3 resize-none outline-none block"
            placeholder="Enter your text..."
            autofocus
            :disabled="loading"
          ></textarea>

          <button
            class="w-10 bg-gray-700 focus:outline-none cursor-pointer flex justify-center items-center"
            :disabled="loading"
          >
            <i v-if="!loading" class="fas fa-check text-white"></i>
            <i v-if="loading" class="fas fa-spinner fa-spin text-white"></i>
          </button>
        </form>
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
    columnId: {
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
      loading: false,
      openedForm: false,
      newCard: "",
    };
  },

  mounted() {
    this.$socket.on("cards-add", ({ error }) => {
      if (error) {
        this.loading = false;
      } else {
        this.openedForm = false;
      }
    });
  },

  methods: {
    async addCard() {
      const newCard = this.newCard.trim();

      if (!newCard) {
        return;
      }

      this.loading = true;

      try {
        this.$socket.emit("cards-add", {
          columnId: this.columnId,
          description: newCard,
        });
      } catch (error) {
        this.loading = false;
      }
    },
  },

  watch: {
    openedForm: function () {
      if (this.openedForm) {
        return;
      }

      this.newCard = "";
      this.loading = false;
    },
  },
});
</script>
