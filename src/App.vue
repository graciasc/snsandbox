<script setup lang="ts">
import athlete from './assets/data.json';
import Academia from './components/AcademicFitReport.vue'

</script>
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Academia :athlete="athlete.data[0]" />
</template>


