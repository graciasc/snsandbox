<template>
  <div>
    <div class="info">
      <h2>{{athlete.name}}</h2>
      <ul>
        <li>
          <label>Sport:</label>
          {{athlete.sport}}
        </li>
        <li>
          <label>Class:</label>
          {{athlete.grad_year}}
        </li>
        <li>
          <label>Club:</label>
          {{athlete.club.name}}
        </li>
        <li>
          <label>High School:</label>
          {{athlete.high_school.name}}
        </li>
        <li>
          <label>GPA:</label>
          {{athlete.gpa}}
        </li>
        <li>
          <label>Desired Major:</label>
          {{athlete.major}}
        </li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th>School Name</th>
          <th>Althletic Division</th>
          <th>Conference</th>
          <th>Ranking <br/> (DI NCAA) <br/> (DII & DIII Hero Sports)</th>
          <th>Min</th>
          <th>25%</th>
          <th>50%</th>
          <th>75%</th>
          <th>Max</th>
          <th>SAT Reading*** <br/> 25% - 75%</th>
          <th>SAT Math*** <br/> 25%</th>
          <th>ACT Composite <br/> 25% </th>
        </tr>
      </thead>
        <ReportRow :reports="athlete.report"/>
    </table>
  </div>
</template>

<script>
import ReportRow from "@/components/ReportRow";
export default {
  name: "AcademicFitReport",
  components: {
    ReportRow
  },
  props: {
    athlete: {
      type: Object,
      required: false
    }
  },
};
</script>

<style>
th {
  padding: 15px
}
</style>
