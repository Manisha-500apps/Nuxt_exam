<template>
  <div>
    <CollectionList1
      :propData="fetchData"
      @deleteRecord="deletePage"
      @prefillData="prefillData"
    />
    <div>
      <CollectionAdd1 :selectedPages="selectedPages" @pages="addPages" />
      <CollectionEdit1
        v-if="show"
        :key="edit"
        :props="fetchData.data._rawValue"
        :pageObj="pageData"
        @pagesUpdate="updatePages"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const url =
  "https://v1-orm-lib.mars.hipso.cc/api/pages/?offset=0&limit=100&sort_column=id&sort_direction=desc";
const url_data = "https://v1-orm-lib.mars.hipso.cc/api/pages/";

const fetchData = await useAuthLazyFetch(`${url}`, {});
console.log("dddddddddddd", fetchData);

const edit = ref(0);
const page = ref(fetchData.data._rawValue);
const pageData = ref({});
const show = ref(false);

const selectedPages = ref({
  name: "",
  category: "",
  page_html: null,
  page_css: null,
});
// add the pages
const addPages = async (data: object) => {
  const pageValue = {
    body: JSON.stringify(data),
  };

  useAuthLazyFetchPost(`${url_data}`, pageValue);
  page.value.unshift(data);
};
// edit the pages
const prefillData = (data: object) => {
  show.value = true;
  pageData.value = data;
  edit.value++;
};
const updatePages = async (data: Object) => {
  const putOptions = {
    body: JSON.stringify(data),
  };
  await useAuthLazyFetchPut(`${url_data}${data.uid}`, putOptions);
  getCall(data.uid);
};
// delete the pages
const deletePage = (data: object) => {
  const deleteOptions = {
    body: JSON.stringify(data),
  };
  useAuthLazyFetchDelete(`${url_data}${data.uid}`, deleteOptions);
  getCall(data.uid);
};

async function getCall(data: any) {
  await useAuthLazyFetch(`${url_data}${data}`, {});
}
</script>
