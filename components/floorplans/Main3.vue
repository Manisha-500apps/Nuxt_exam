<template>
  <div>
    <FloorplansList3
      @slidebar="slidebarData"
      @slidebarEdit="slidebarEdit"
      @deletePlan="deletePlan"
      :floorData="Data"
    />
    <div v-if="open" :key="option">
      <FloorplansAdd3 @add-floors="addPlan" :floorData="Data" :is_open="open" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const Data = ref([]);
const open = ref(false);
const option = ref(0);
const options = ref(0);
const plans = ref({});
const open1 = ref(false);
const url =
  "https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/?offset=0&limit=100&sort_column=id&sort_direction=desc";
const url_data =
  "https://v1-orm-gharpe.mercury.infinity-api.net/api/floorplans/";
// data from get call
const getPlan = async () => {
  const { data: getPlan } = await useAuthLazyFetch(`${url}`, {});
  Data.value = getPlan.value;
};
// adding the candidates
const addPlan = async (data: object) => {
  const postOptions = {
    body: JSON.stringify(data),
  };

  await useAuthLazyFetchPost(`${url_data}`, postOptions);
  Data.value.unshift(data);
  getPlan();
};
getPlan();

const slidebarData = () => {
  open.value = true;
  option.value++;
};

const slidebarEdit = (data: any) => {
  plans.value = data;
  options.value++;
  open1.value = true;
};

// delete the plan
const deletePlan = async (data: any) => {
  const deleteOptions = {
    body: JSON.stringify(data),
  };
  await useAuthLazyFetchDelete(`${url_data}${data.uid}`, deleteOptions);
  getPlan();
};
</script>
