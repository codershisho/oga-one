<script setup lang="ts">
const samplelabel = "nuxt3";
const sampleText= ref<string>("hello nuxt3");
</script>

<template>
  <div>
    <!-- Remove this component to get started! -->
    <!--    <NuxtWelcome />-->
    <q-btn :label="samplelabel" color="red"/>
    <q-input filled v-model="sampleText" />
  </div>
</template>