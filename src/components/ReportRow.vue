<template>
  <tbody class="bg-black">
    <tr v-for="item in reports" :key="item.school">
      <td>{{ item.school }}</td>
      <td>{{ item.division }}</td>
      <td>{{ item.conference }}</td>
      <td>{{ item.ranking }}</td>
      <td>{{ item.gpa.min }}</td>
      <td>{{ item.gpa['25%'] }}</td>
      <td>{{ item.gpa['50%'] }}</td>
      <td>{{ item.gpa['75%'] }}</td>
      <td>{{ item.gpa.max }}</td>
      <td>{{ item.sat.reading.min }}</td>
      <td>{{ item.sat.reading.max }}</td>
      <td>{{ item.sat.math.min }}</td>
      <td>{{ item.sat.math.max }}</td>
      <td>{{ item.act.min }}</td>
      <td>{{ item.act.max }}</td>
    </tr>
  </tbody>
</template>



<script setup lang="ts">
const props = defineProps<{
  reports: Array<any>
}>()

console.log('value', props)
</script>
