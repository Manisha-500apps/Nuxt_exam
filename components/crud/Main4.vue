<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Vue</h1>
      </div>

      <div>
        <input
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Login Name: Manisha"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-between">
    <div class="relative w-[400px]">
      <div
        class="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none"
      ></div>
      <input
        v-model="search"
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
        @input="getName"
      />
    </div>
    <div class="ml-10 flex justify-end">
      <button
        type="button"
        class="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="openModal"
      >
        Add Employee
      </button>
    </div>
  </div>

  <div
    class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:bg-gray-700 mt-2"
  >
    <CrudList4
      v-if="addEmployee && addEmployee.length"
      :project="addEmployee"
      @emitData="empEvent"
    />
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
              </DialogTitle>

              <div>
                <CrudAdd4 @add="addEmp" @cancel="isOpen = false" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
const search = ref();
const isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
const addEmployee: any = ref([]);
onMounted(() => {
  if (localStorage.getItem("empDetails"))
    addEmployee.value = JSON.parse(localStorage.getItem("empDetails"));
});
const addEmp = async (project: any) => {
  addEmployee.value.push(project);
  localStorage.setItem("empDetails", JSON.stringify(addEmployee.value));
  isOpen.value = false;
};
// To edit employee data
const empData = async (note: any) => {
  addEmployee.value[note.index] = note.note;
  localStorage.setItem("empDetails", JSON.stringify(addEmployee.value));
};

const deleteData = async (note: any) => {
  addEmployee.value.splice(note.index, 1);
  localStorage.setItem("empDetails", JSON.stringify(addEmployee.value));
};

const empEvent = (note: Object) => {
  note.value == "edit" ? empData(note) : deleteData(note);
};

const getName = () => {
  if (search.value) {
    addEmployee.value = addEmployee.value.filter((item: any) => {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    });
  } else {
    addEmployee.value = JSON.parse(localStorage.getItem("empDetails"));
  }
};
</script>
