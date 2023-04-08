<template>
  <h1 class="text-base font-semibold leading-6 text-gray-900">
    Employee Assessments
  </h1>

  <div class="px-4 sm:px-6 lg:px-8">
    <CollectionList v-if="emp.length" :form="emp" />
  </div>
  <div class="flex justify-end">
    <button
      type="button"
      class="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="open = true"
    >
      Add Employee
    </button>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
              <TransitionChild
                as="template"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div
                    class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div
                      class="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6"
                    >
                      <div class="px-4 sm:px-6">
                        <div>
                          <DialogTitle
                            class="text-base font-semibold leading-6 text-gray-900"
                            >Add-Assessment</DialogTitle
                          >
                          <div class="flex flex-shrink-0 justify-end px-4 py-4">
                            <button
                              type="button"
                              class="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              @click="open = false"
                            >
                              <span class="sr-only">Close panel</span>
                              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                          <div>
                            <CollectionAdd
                              @add="add"
                              @cancel="open = false"
                            ></CollectionAdd>
                          </div>

                          <div class="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              @click="open = false"
                            >
                              <span class="sr-only">Close panel</span>
                              <XMarkIcon aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

<script setup lang="ts">
import {
  TransitionChild,
  DialogPanel,
  TransitionRoot,
  Dialog,
} from "@headlessui/vue";
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const emp = ref([]);
const url_data =
  "https://v7-stark-db-orm.mercury.infinity-api.net/api/assessments/";
const url =
  "https://v7-stark-db-orm.mercury.infinity-api.net/api/assessments/?offset=0&limit=100&sort_column=id&sort_direction=desc";

const { data: formdata } = await useAuthLazyFetch(`${url}`, {});
emp.value = formdata.value;

const open = ref(false);

const add = async (form: any) => {
  const { data } = await useAuthLazyFetchPost(`${url_data}`, {
    body: {
      name: form.name,
      type: "employer",
      max_time_allowed: 0,
      due_date: "2023-04-06T12:33:45.923Z",
      difficulty_level: form.difficulty_level,
      description: form.description,
      questions: {},
      multiple_attempts_allowed: 0,
      instructions: {},
      status: 0,
      owner_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      last_modified_date: "2023-04-06T12:33:45.923Z",
    },
  });
  open.value = false;
  empData();
};

const empData = async () => {
  emp.value = [];
  const { data: formdata } = await useAuthLazyFetch(`${url}`, {});
  emp.value = formdata.value;
};
</script>
