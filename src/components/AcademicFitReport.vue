<template>
  <div class="px-12">
    <div class="flex justify-between">
      <div class="flex space-x-1">
        <img class="rounded-full mt-1 w-16 h-16" :src="athlete.profile_image" alt="profile image" />
        <div class="flex flex-col">
          <div v-if="!showInput">
            <h1 @click="toggleEditing" class="w-fit text-md font-bold text-sr-blue">{{ athlete.name }}
            </h1>
          </div>
          <div class="flex" v-else>
            <input @change="handleInputChange" :value="inputText" @blur="saveText" @keyup.enter="saveText" />
          </div>
          <div class="grid grid-cols-2 place-content-evenly">
            <div class="flex flex-col text-xs">
              <label><span class="font-bold"> Sport: </span> {{ athlete.sport }} </label>
              <label><span class="font-bold"> Class: </span> {{ athlete.grad_year }} </label>
              <label><span class="font-bold"> Club: </span> {{ athlete.club.name }} </label>
            </div>
            <div class="flex flex-col text-xs">
              <label><span class="font-bold"> High School: </span> {{ athlete.high_school.name }} </label>
              <label><span class="font-bold"> GPA: </span> {{ athlete.gpa }} </label>
              <label><span class="font-bold"> Desired Major: </span> {{ athlete.major }} </label>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto">
        <img class="h-auto w-16 mx-auto" src="../assets/logo.svg" />
        <h1 class="text-sm w-fit pt-4 "> Academic Fit Report </h1>
      </div>
    </div>
  </div>
  <div class="px-12 text-xxxs">
    <table>
      <tr>
        <th rowspan="2">School Name</th>
        <th rowspan="2">Althletic Division</th>
        <th rowspan="2">Conference</th>
        <th colspan="1">Ranking**</th>
        <th colspan="5">GPA**</th>
        <th colspan="1">SAT READING***</th>
        <th colspan="1">SAT MATH***</th>
        <th colspan="1">ACT COMPOSITE***</th>
      </tr>
      <tr>
        <th class="text-center">(DI NCAA) <br /> (DII & DIII Hero Sports)</th>
        <th class="text-center">Min</th>
        <th class="text-center">25%</th>
        <th class="text-center">50%</th>
        <th class="text-center">75%</th>
        <th class="text-center">Max</th>
        <th class="text-center"> 25% - 75%</th>
        <th class="text-center"> 25% - 75%</th>
        <th class="text-center"> 25% - 75%</th>
      </tr>
      <ReportRow :reports="athlete.report" />
    </table>
    <p class="mt-24 text-xxs">
      *Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are
      based on data from Hero Sports (www.herosports.com/rankings)
      ** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their
      GPA on their profile
      ***SAT and ACT scores based on national data provided by the National Center of Education Statistics-
      https://nces.ed.gov/ipeds/
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import ReportRow from './ReportRow.vue';
import { useAthleteStore } from '@/stores/AthleteStore'

const { athleteData } = storeToRefs(useAthleteStore());
const athlete = computed(() => athleteData.value);
const athleteStore = useAthleteStore();

const useEditButton = () => {
  const showInput = ref(false)
  const inputText = ref(athleteData.value.name);

  const toggleEditing = () => {
    showInput.value = true;
  };

  const saveText = () => {
    showInput.value = false;
    athleteStore.updateAthleteName(inputText.value)
  };

  const handleInputChange = (event) => {
    inputText.value = event.target.value;
  };

  return { showInput, inputText, toggleEditing, saveText, handleInputChange };
}

const { showInput, inputText, toggleEditing, saveText, handleInputChange } = useEditButton();
</script>

<style>
table {
  width: 100%;
}

th {
  text-align: center;
  background-color: black;
  color: white;
}
</style>
