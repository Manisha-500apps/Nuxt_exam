<template>
  <div>
    <label
      for="note"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >name:</label
    >
    <div class="mt-2.5">
      <input
        name="note"
        v-model="data.name"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label
      for="note"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >type:</label
    >
    <div class="mt-2.5">
      <select
        v-model="data.type"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>practice</option>
      </select>
    </div>
  </div>
  <div>
    <label
      for="note"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >difficulty_level:</label
    >
    <div class="mt-2.5">
      <select
        v-model="data.difficulty_level"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>easy</option>
      </select>
    </div>
  </div>

  <div>
    <label
      for="note"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >description:</label
    >
    <div class="mt-2.5">
      <input
        name="note"
        v-model="data.description"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label
      for="note"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >Due Date:</label
    >
    <div class="mt-2.5">
      <input
        name="due_date"
        type="date"
        v-model="data.due_date"
        id="note"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div class="flex flex-shrink-0 justify-end px-4 py-4">
    <button
      type="submit"
      @click="emit('cancel')"
      class="block mr-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      cancel
    </button>

    <button
      type="submit"
      @click="emit('add', data)"
      class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      save
    </button>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["add", "cancel"]);
const data = ref({
  name: "",
  type: "practice",
  max_time_allowed: 0,
  due_date: "2023-04-06",
  difficulty_level: "easy",
  description: "",
  questions: {},
  multiple_attempts_allowed: 0,
  instructions: {},
  status: 0,
  owner_id: "4a2e241d-9c12-4032-8384-473f91b1adc1",
  last_modified_date: "2023-04-09T09:07:51",
});
</script>
