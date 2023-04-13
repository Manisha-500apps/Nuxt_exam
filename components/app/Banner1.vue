<template>
  <div>
    <div
      class="flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
    >
      <p class="text-sm leading-6 text-white">
        <a href="#"
          ><svg
            viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" /></svg
          >Join the saaS Revolution by 500apps >> 50 Apps for $14.99/user<span
            aria-hidden="true"
            >&rarr;</span
          ></a
        >
      </p>
      <div class="flex flex-1 items-left">
        <button
          type="button"
          class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span class="sr-only">Dismiss</span>
          <XMarkIcon class="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
    <div class="items-center">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
              >{{ tab.name }}</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
const tabs = [
  { name: "Features", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
  { name: "Company", href: "#", current: false },
  { name: "Contact Sales", href: "#", current: false },
  { name: "Login", href: "#", current: true },
  { name: "SignUp", href: "#", current: true },
];
</script>
