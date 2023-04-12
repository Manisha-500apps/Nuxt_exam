<template>
  <div>
    <TransitionRoot as="template" :show="is_open">
      <Dialog as="div" class="relative z-10" @close="is_open = false">
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle
                          class="text-base font-semibold leading-6 text-gray-900"
                          >Panel title</DialogTitle
                        >
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="is_open = false"
                          >
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <form @submit="addBlock()">
                      <div class="relative mt-6 flex-1 px-4 sm:px-6">
                        <div>
                          <label
                            for="text"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Name</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="form.name"
                              type="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Enter your name"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="text"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Builup Area</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="form.build_up_area"
                              type="text"
                              name="text"
                              id="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Enter your build up area"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="text"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Carpet Area</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="form.carpet_area"
                              type="text"
                              name="text"
                              id="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Enter your area "
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="text"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Metric Name</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="form.metric_name"
                              type="text"
                              name="text"
                              id="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Enter name here"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="text"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Facing</label
                          >
                          <div class="mt-2">
                            <input
                              v-model="form.facing"
                              type="text"
                              name="text"
                              id="text"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Enter message here"
                            />
                          </div>
                          <div>
                            <label
                              for="text"
                              class="block text-sm font-medium leading-6 text-gray-900"
                              >project Id</label
                            >
                            <div class="mt-2">
                              <input
                                v-model="form.project_id"
                                type="text"
                                name="text"
                                id="text"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your project id"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="flex-shrink-0 px-4 py-5 sm:px-6">
                          <div class="flex justify-end space-x-3">
                            <button
                              type="button"
                              class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              @click="is_open = false"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const form = ref({});
const props = defineProps({
  is_open: Boolean,
});
const emit = defineEmits(["add-floors"]);

// const name = ref("");
// const category = ref("");
// const uid = ref("");

const addBlock = () => {
  form.value = {
    name: form.value.name,
    build_up_area: 0,
    carpet_area: 0,
    metric_name: form.value.metric_name,
    facing: "East",
    bedrooms: 0,
    bathrooms: 0,
    kitchens: 0,
    project_id: form.value.project_id,
    balconies: 0,
  };
  emit("add-floors", form.value);
};
</script>
