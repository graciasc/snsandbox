<template>
  <div class="px-12">
    <div class="flex justify-between">
      <div class="flex space-x-1">
        <img class="rounded-full mt-1 w-16 h-16" :src="athlete.profile_image" alt="profile image" />
        <div class="flex flex-col">
          <h1 class="text-md font-bold text-sr-blue">{{ athlete.name }}</h1>
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
import ReportRow from './ReportRow.vue';
// import type { Athlete } from '../interfaces/Athlete'
export interface AthleteResponse {
  data: AthleteMeta[]
}

export interface AthleteMeta {
  name: string;
  sport: string;
  grad_year: number;
  birthday: string;
  email: string;
  url: string;
  club: {
    name: string;
  };
  high_school: {
    name: string;
  };
  gpa: number;
  major: string;
  profile_image: string;
  report: Report[];
}

interface Report {
  school: string;
  division: string;
  conference: string;
  ranking: number;
  gpa: {
    min: number;
    '25%': number;
    '50%': number;
    '75%': number;
    max: number;
  };
  sat: {
    reading: {
      min: number | string;
      max: number | string;
    };
    math: {
      min: number | string;
      max: number | string;
    };
  };
  act: {
    min: number | string;
    max: number | string;
  };
}


defineProps<{
  athlete: AthleteMeta
}>()
/*
 * TODO: set defaults if the value is undefined or null
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
*/
</script>

<style>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th {
  text-align: center;
  background-color: black;
  color: white;
}
</style>
