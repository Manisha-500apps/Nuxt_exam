<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Get more out of 500apps
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">
        Amazing tips, how-to's to help businesses succeed like Fortune 500
      </p>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <li v-for="person in people" :key="person.name">
          <img
            class="aspect-[3/2] w-full rounded-2xl object-cover"
            :src="person.imageUrl"
            alt=""
          />
          <h3
            class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
          >
            {{ person.name }}
          </h3>
          <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex gap-x-6"></ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: "11 Best Two-Factor Authentication Apps",
    role: "Find the best two-factor authentication apps and secure your online accounts. This list of the 11 best two-factor...",
    imageUrl: "https://500apps.com/images/blog/best-authentication-apps.png!lg",
  },
  {
    name: "11 Best IP Monitoring Tools of 2023: A Quick Overview",
    role: "In today's connected world, it is important to have the right tools to monitor IPs. IP monitoring can provide...",
    imageUrl: "https://500apps.com/images/blog/best-ip-monitoring-tools.png!lg",
  },
  {
    name: "11 Best KPI Dashboard Software and Tools",
    role: "Are you looking for the best KPI dashboard software and tools to help you measure, monitor, and analyze your...",
    imageUrl: "https://500apps.com/images/blog/kpi-software.png!lg",
  },
];
</script>
