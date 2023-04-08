<template>
  <table class="min-w-full divide-y divide-gray-700">
    <thead>
      <tr>
        <th
          v-for="(category, index) in categories"
          :key="index"
          scope="col"
          class="py-3 5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0 group"
        >
          {{ category }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-800">
      <tr
        v-for="(row, index) in form"
        :key="`item-${index}`"
        class="cursor-pointer hover:bg-gray-200"
      >
        <td
          v-for="(category, index) in categories"
          :key="`row-${index}`"
          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
        >
          {{ row[category] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const categories = ref(["name", "difficulty_level", "description"]);
const props = defineProps({
  form: { type: Array, required: true },
});
</script>
