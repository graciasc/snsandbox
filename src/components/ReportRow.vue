<template>
  <tbody class="text-center space-x-2">
    <tr :class="`${cellBackgroundColor(i)} text-center p-5`" v-for="(item, i) in reports" :key="item.school">
      <td :class="`text-left sticky  ${cellBackgroundColor(i)} left-0`">{{ item.school }}</td>
      <td>{{ item.division }}</td>
      <td class="text-left">{{ item.conference }}</td>
      <td>{{ item.ranking }}</td>
      <td>{{ item.gpa.min }}</td>
      <td>{{ item.gpa['25%'].toFixed(2) }}</td>
      <td :style="{ backgroundColor: cellGradient(item.gpa['50%']) }">{{ item.gpa['50%'].toFixed(2) }}</td>
      <td>{{ item.gpa['75%'].toFixed(2) }}</td>
      <td>{{ item.gpa.max.toFixed(2) }}</td>
      <td>{{ item.sat.reading.min }} - {{ item.sat.reading.max }}</td>
      <td>{{ item.sat.math.min }} - {{ item.sat.math.max }}</td>
      <td>{{ item.act.min }} - {{ item.act.max }}</td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import type { Report } from '@/interfaces/Athlete'
import { computed } from 'vue'

const props = defineProps<{
  reports: Report[];
  playerGpa: number;
}>()

const cellBackgroundColor = computed(() => {
  return (incrementor: number) => {
    return incrementor % 2 === 1 ? 'bg-blue-50' : 'bg-white';
  }
})

const cellGradient = computed(() => {
  return (schoolGpa: number) => {
    const difference = schoolGpa - props.playerGpa

    if (difference > 0.10) {
      return '#d7737d'
    } else if (difference <= 0.10 && difference > 0) {
      return '#c194b5'
    } else if (difference === 0) {
      return '#b4a7d6'
    } else if (difference < 0 && difference >= -0.10) {
      return '#a6a8da'
    } else {
      return '#75ace5'
    }
  }
})
</script>
