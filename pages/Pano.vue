<template>
  <div>
    <client-only>
      <PanoramaView :urlPath="urlPath" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
const urlPath = ref(
  "https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg"
);
</script>

<style scoped></style>
