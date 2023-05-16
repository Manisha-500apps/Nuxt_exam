<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Floor Plans
        </h1>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="addFloors"
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Plan
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Bulidup Area
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Carpet Area
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Metric Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Facing
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Project Id
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(plans, index) in floorData" :key="index">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >
                    {{ plans.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ plans.build_up_area }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ plans.carpet_area }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ plans.metric_name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ plans.facing }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ plans.project_id }}
                  </td>

                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  >
                    <PencilSquareIcon
                      @click="prefillFloor(plans, index)"
                      class="h-5 w-5 mr-3"
                      aria-hidden="true"
                    ></PencilSquareIcon>
                    <TrashIcon
                      @click="emitData('deletePlan', plans, index)"
                      class="h-5 w-5"
                      aria-hidden="true"
                    ></TrashIcon>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import {
  XMarkIcon,
  TrashIcon,
  PencilSquareIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
const props = defineProps({
  floorData: {
    type: Array,
    default: () => [],
  },
  is_open: Boolean,
});
const open = ref(true);
const emitData = defineEmits(["slidebar", "slidebarEdit", "deletePlan"]);
// open slide bar
const addFloors = () => {
  emitData("slidebar");
};

const prefillFloor = (data: any, index: number) => {
  emitData("slidebarEdit", data, index);
};
</script>
