<template>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Why Choose 500apps?
    </h2>
    <p class="mt-9 text-lg leading-8 text-gray-600">
      Our Infinity Suite of 50 apps covers all aspects of business operations
    </p>
    <div class="display-4 text-center">
      <button
        type="button"
        class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-11"
      >
        Know More
      </button>
    </div>

    <dl
      class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0 ml-[45px] mr-11"
    >
      <div v-for="item in stats" :key="item.name" class="sm:p-6">
        <div
          class="flex items-baseline text-2xl font-semibold font-family-sans-serif justify-center"
        >
          {{ item.stat }}
        </div>
        <dt class="text-base text-gray-900 font-family-sans-serif">
          {{ item.name }}
        </dt>
      </div>
    </dl>
  </div>
</template>
<script setup>
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/vue/20/solid";

const stats = [
  { name: "Businesses", stat: "91,436+" },
  { name: "Data Centers", stat: "6" },
  { name: "Global Uptime", stat: "99.5%" },
  { name: "Apps", stat: "50" },
];
</script>
