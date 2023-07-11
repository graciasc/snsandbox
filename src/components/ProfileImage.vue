<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  profile_image: string;
  initials: string;
}>()

const backgroundColor = computed(() => {
  const colors = ["#f1603c","#6082fa","#827cb8", "#0097a4", "#ffe066", "#ffa94d"];
    return colors[props.initials[1].charCodeAt(0) % colors.length ];
  })

</script>

<template>
  <div v-if="profile_image">
    <img class="rounded-full mt-1 md:w-16 md:h-16 h-48 w-48" :src="profile_image" alt="profile image" />
  </div>
  <div v-else :style="{ backgroundColor: backgroundColor }" :class="`bg-[${backgroundColor}] rounded-full mt-1 w-16 h-16 flex items-center justify-center`">
    <!-- initials -->
    <p class="text-sm"> {{ initials }} </p>
  </div>
</template>
