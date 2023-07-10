<script setup lang="ts">
import athlete from './assets/data.json';
import Academia from './components/AcademicFitReport.vue'

</script>
<template>
  <div class="space-y-8">
    <div class="border-b-[thick] border-sr-blue border-b-[10px]" />
    <Academia :athlete="athlete.data[0]" />

    <div class="border-b-[thick] border-sr-blue" />
  </div>
</template>


