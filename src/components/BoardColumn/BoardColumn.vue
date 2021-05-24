<template>
  <div class="flex-1 p-4">
    <div class="mb-4 flex justify-between items-center">
      <h2 class="font-semibold">{{ column.name }}</h2>
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
      <li v-if="openedForm" class="p-1 bg-gray-700 mb-4" :class="boardColor">
        <form method="post" class="flex flex-row" @submit.prevent="addCard">
          <textarea
            v-model="newCard"
            class="flex-1 h-12 p-3 resize-none outline-none block"
            placeholder="Enter your text..."
            autofocus
            :disabled="loading"
          ></textarea>

          <button
            class="w-10 focus:outline-none cursor-pointer flex justify-center items-center"
            :class="boardColor"
            :disabled="loading"
          >
            <i v-if="!loading" class="fas fa-check text-white"></i>
            <i v-if="loading" class="fas fa-spinner fa-spin text-white"></i>
          </button>
        </form>
      </li>

      <li
        v-for="item in column.items"
        :key="item._id"
        class="p-4 text-white mb-4 relative"
        :class="boardColor"
      >
        <p class="w-full pr-8">{{ item.description }}</p>

        <i
          class="far fa-trash-alt text-white opacity-75 hover:opacity-100 cursor-pointer absolute right-4 top-5"
          @click="removeCard(item._id)"
        ></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BoardColumn",

  props: {
    column: {
      type: Object,
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

  computed: {
    boardColor() {
      const options = {
        green: "bg-green-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
      };

      return options[this.column.color] || "bg-gray-700";
    },
  },

  mounted() {
    this.$socket.on("cards-add", ({ error }) => {
      this.loading = false;

      if (!error) {
        this.newCard = "";
      }
    });
  },

  methods: {
    addCard() {
      const newCard = this.newCard.trim();

      if (!newCard) {
        return;
      }

      this.loading = true;

      try {
        this.$socket.emit("cards-add", {
          columnId: this.column._id,
          description: newCard,
        });
      } catch (error) {
        this.loading = false;
      }
    },

    removeCard(cardId) {
      this.$socket.emit("cards-remove", {
        columnId: this.column._id,
        cardId,
      });
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
