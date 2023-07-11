<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  profileImage: string;
  initials: string;
}>()

const backgroundColor = computed(() => {
  const colors = ["#f1603c","#6082fa","#827cb8", "#0097a4", "#ffe066", "#ffa94d"];
    return colors[props.initials[1].charCodeAt(0) % colors.length ];
  })
</script>

<template>
  <div v-if="profileImage">
    <img class="rounded-full mt-1 md:w-16 md:h-16 h-24 w-24" :src="profileImage" alt="profile image" />
  </div>
  <div v-else :style="{ backgroundColor: backgroundColor }" :class="`bg-[${backgroundColor}] rounded-full mt-1 w-16 h-16 flex items-center justify-center`">
    <p class="text-sm"> {{ initials }} </p>
  </div>
</template>
