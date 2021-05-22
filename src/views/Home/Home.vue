<template>
  <GuestLayout class="justify-center">
    <form
      method="post"
      class="w-full max-w-sm mx-auto"
      @submit.prevent="submitForm"
    >
      <InputField
        label="Your board name:"
        name="boardName"
        placeholder="Your board name"
        autofocus
        v-model="boardName"
        :disabled="loading"
      />

      <Button
        class="text-white"
        :class="{
          'bg-gray-700 hover:bg-gray-900': !loading,
          'bg-gray-500 cursor-wait': loading,
        }"
        :disabled="loading"
        >{{ !loading ? "Create board" : "Creating board..." }}</Button
      >
    </form>

    <div class="w-full max-w-sm mx-auto mt-6 pt-6 border-t">
      <p class="text-gray-500">
        All boards expire 48 hours after their creation. We will review this in
        the future.
      </p>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout";

import InputField from "@/components/InputField";
import Button from "@/components/Button";

import HttpService from "@/services/http";

export default {
  components: {
    GuestLayout,
    InputField,
    Button,
  },

  data() {
    return {
      loading: false,
      boardName: "",
    };
  },

  methods: {
    async submitForm() {
      const boardName = this.boardName.trim();

      if (!boardName) {
        return;
      }

      this.loading = false;

      try {
        const {
          data: { board },
        } = await HttpService.post("/boards", {
          name: boardName,
        });

        this.$router.push({ name: "Board", params: { id: board._id } });
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>
