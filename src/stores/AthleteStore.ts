import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '../assets/data.json'
import type { AthleteMeta } from '../interfaces/Athlete'

export const useAthleteStore = defineStore('AthleteStore', () => {
  const athleteData = ref<AthleteMeta>(data.data[0]);

  function updateAthleteName(newName: string) {
    athleteData.value.name = newName;
  }

  return { athleteData, updateAthleteName }
})
