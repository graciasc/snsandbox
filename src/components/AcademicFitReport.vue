<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import ReportRow from '@/components/ReportRow.vue';
import ProfileImage from '@/components/ProfileImage.vue'
import Disclaimer from '@/components/Disclaimer.vue';
import { useAthleteStore } from '@/stores/AthleteStore'

const { athleteData } = storeToRefs(useAthleteStore());
const athlete = computed(() => athleteData.value);
const athleteStore = useAthleteStore();

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


const initials = computed(() => {
  return athlete.value.name[0].toUpperCase() + athlete.value.name.split(' ')[1][0].toUpperCase();
})
</script>

<template>
  <div class="px-12">
    <div class="md:flex md:justify-between">
      <div class="md:flex md:space-x-1 md:flex-row flex flex-col items-center ">
        <div class="md:pt-0 pt-1">
          <ProfileImage :initials="initials" :profileImage="athlete.profile_image" />
        </div>
        <div class="flex flex-col md:items-start items-center">
          <div v-if="!showInput">
            <h1 @click="toggleEditing" class="w-fit text-md font-bold text-sr-blue">{{ athlete.name }}
            </h1>
          </div>
          <div class="flex" v-else>
            <input @change="handleInputChange" :value="inputText" @blur="saveText" @keyup.enter="saveText" />
          </div>
          <div
            class="md:grid md:grid-cols-2 md:place-content-evenly grid justify-center text-xs md:pt-0 pt-2 md:text-left text-center ">
            <div class="flex flex-col">
              <label><span class="font-bold"> Sport: </span> {{ athlete.sport }} </label>
              <label><span class="font-bold"> Class: </span> {{ athlete.grad_year }} </label>
              <label><span class="font-bold"> Club: </span> {{ athlete.club.name }} </label>
            </div>
            <div class="flex flex-col">
              <label><span class="font-bold"> High School: </span> {{ athlete.high_school.name }} </label>
              <label><span class="font-bold"> GPA: </span> {{ athlete.gpa }} </label>
              <label><span class="font-bold"> Desired Major: </span> {{ athlete.major }} </label>
            </div>
          </div>
        </div>
      </div>
      <div class="md:ml-auto md:pt-0 pt-12">
        <img class="h-12 w-auto mx-auto" src="../assets/srlogo.png" />
        <h1 class="text-sm w-fit md:ml-atuo mx-auto "> Academic Fit Report </h1>
      </div>
    </div>
  </div>
  <div class="px-12 text-xxxs">
    <div class="overflow-x-auto w-full ">
      <table class="w-full text-center">
        <tr>
          <th class=" sticky left-0" rowspan="2">School Name</th>
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
        <ReportRow :reports="athlete.report" :playerGpa="athlete.gpa" />
      </table>
      <Disclaimer />
    </div>
  </div>
</template>

<style>
th {
  background-color: black;
  color: white;
}
</style>

