<template>
  <div>
    <div class="info">
      <h2 class="text-red-200"> {{ athlete.name }} </h2>
      <ul>
        <li>
          <label>Sport:</label>
          {{ athlete.sport }}
        </li>
        <li>
          <label>Class:</label>
          {{ athlete.grad_year }}
        </li>
        <li>
          <label>Club:</label>
          {{ athlete.club.name }}
        </li>
        <li>
          <label>High School:</label>
          {{ athlete.high_school.name }}
        </li>
        <li>
          <label>GPA:</label>
          {{ athlete.gpa }}
        </li>
        <li>
          <label>Desired Major:</label>
          {{ athlete.major }}
        </li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th>School Name</th>
          <th>Althletic Division</th>
          <th>Conference</th>
          <th>Ranking <br /> (DI NCAA) <br /> (DII & DIII Hero Sports)</th>
          <th>Min</th>
          <th>25%</th>
          <th>50%</th>
          <th>75%</th>
          <th>Max</th>
          <th>SAT Reading*** <br /> 25% - 75%</th>
          <th>SAT Math*** <br /> 25%</th>
          <th>ACT Composite <br /> 25% </th>
        </tr>
      </thead>
      <ReportRow :reports="athlete.report" />
    </table>
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
th {
  padding: 15px
}
</style>
