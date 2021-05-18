<template>
  <GuestLayout class="justify-center">
    <form method="post" class="w-full max-w-sm mx-auto" @submit.prevent="">
      <InputField
        label="Board name:"
        name="boardName"
        placeholder="Your board name"
        v-model="boardName"
      />

      <Button class="bg-gray-700 hover:bg-gray-900 text-white"
        >Create board</Button
      >
    </form>
  </GuestLayout>
</template>

<script>
import GuestLayout from "@/layouts/GuestLayout";

import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default {
  components: {
    GuestLayout,
    InputField,
    Button,
  },

  data() {
    return {
      boardName: "",
    };
  },
};
</script>
