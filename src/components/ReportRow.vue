<template>
  <tbody class="">
    <tr :class="`${i % 2 === 1 ? 'bg-blue-50' : ''} text-center p-5`" v-for="(item, i) in reports" :key="item.school">
      <td class="text-left">{{ item.school }}</td>
      <td>{{ item.division }}</td>
      <td class="text-left">{{ item.conference }}</td>
      <td>{{ item.ranking }}</td>
      <td>{{ item.gpa.min }}</td>
      <td>{{ item.gpa['25%'].toFixed(2) }}</td>
      <td>{{ item.gpa['50%'].toFixed(2) }}</td>
      <td>{{ item.gpa['75%'].toFixed(2) }}</td>
      <td>{{ item.gpa.max.toFixed(2) }}</td>
      <td>{{ item.sat.reading.min }} - {{ item.sat.reading.max }}</td>
      <td>{{ item.sat.math.min }} - {{ item.sat.math.max }}</td>
      <td>{{ item.act.min }} - {{ item.act.max }}</td>
    </tr>
  </tbody>
</template>



<script setup lang="ts">
defineProps<{
  reports: Array<any>
}>()
</script>

<style>
td {
  text-align: center;
  vertical-align: bottom;
  padding: 4px 2px 0 2px;
}
</style>
