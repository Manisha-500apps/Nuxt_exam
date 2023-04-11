<template>
  <!-- 3D component for rendering the panorama viewer -->
  <div id="panorama-viewer">
    <VPannellum
      v-model:hfov.sync="hfov"
      v-model:yaw.sync="yaw"
      v-model:pitch.sync="pitch"
      :src="urlPath"
      :preview="urlPath"
      :auto-rotate="isAutoRotate"
      :auto-load="true"
      :show-zoom="false"
      :show-fullscreen="false"
      :compass="false"
    ></VPannellum>
  </div>
</template>

<script setup lang="ts">
import VPannellum from "vue-pannellum";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(["urlPath"]);
// Panorama to automatically rotate when loaded
const isAutoRotate = ref(true);
// Panorama starting horizontal field of view in degrees
const hfov = ref(270);
// Panorama starting yaw position in degrees
const yaw = ref(0);
// Panorama starting pitch position in degrees
const pitch = ref(1);
</script>

<style>
#panorama-viewer {
  width: calc(100vw - 0px) !important;
  height: calc(100vh - 0px) !important;
  border-radius: 0px;
  cursor: grab;
}
</style>
