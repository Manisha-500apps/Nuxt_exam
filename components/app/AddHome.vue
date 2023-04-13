<template>
  <AppBanner></AppBanner>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Join the SaaS Revolution
            </h1>
            <h2
              class="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl mb-6"
            >
              50 Apps for ₹999
            </h2>

            <div class="sm:col-span-2 flex">
              <CheckIcon class="left-0 h-5 w-5 text-indigo-500" />
              <p class="mb-5">All apps you need for your business</p>
            </div>

            <div class="sm:col-span-2 flex">
              <CheckIcon class="left-0 h-5 w-5 text-indigo-500" />
              <p class="mb-5">
                Apps for sales, marketing, HR, support, developers and
                productivity
              </p>
            </div>
            <div class="sm:col-span-2 flex">
              <CheckIcon class="h-5 w-5 text-indigo-500" />
              <p class="mb-5">Unbelievable pricing for just ₹999/user</p>
            </div>
            <div class="sm:col-span-2 flex">
              <CheckIcon class="left-0 h-5 w-5 text-indigo-500" />
              <p class="mb-5">
                24/5 support and 99.5% guaranteed global uptime
              </p>
            </div>
            <div class="sm:col-span-2 flex">
              <CheckIcon class="left-0 h-5 w-5 text-indigo-500" />
              <p class="mb-5">
                Apps for sales, marketing, HR, support, developers and
                productivity
              </p>
            </div>
            <div class="sm:col-span-2 flex">
              <CheckIcon class="left-0 h-5 w-5 text-indigo-500" />
              <p class="mb-5">
                200+ integrations with the finest software tools
              </p>
            </div>
            <div class="sm:col-span-2 flex">
              or
              <div class="pl-6">
                <img
                  src="  https://500apps.com/lib/images/sso-icons/google.svg?v=1674662605949656187"
                />
              </div>
              <div class="pl-3">
                <img
                  src="  https://500apps.com/lib/images/sso-icons/linkedin.svg?v=1674662605949656187"
                />
              </div>
              <div class="pl-3">
                <img
                  src="https://500apps.com/lib/images/sso-icons/microsoft.svg?v=1674662605949656187"
                />
              </div>
              <div class="pl-3">
                <img
                  src="https://500apps.com/lib/images/sso-icons/facebook.svg?v=1674662605949656187"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://500apps.com/lib/images/static/ribbon-five3.svg?v=1674662605949656187"
          alt="Product screenshot"
          class="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
          width="243"
          height="144"
        />
      </div>
    </div>
  </div>
  <AppCard></AppCard>
  <AppCardsView />
  <AppSetView />

  <div><FeaturesTemplate6></FeaturesTemplate6></div>
  <div><FeaturesTemplate4></FeaturesTemplate4></div>
  <FeaturesTemplate5></FeaturesTemplate5>
  <FeaturesTemplate3></FeaturesTemplate3>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { CheckIcon } from "@heroicons/vue/20/solid";
</script>
