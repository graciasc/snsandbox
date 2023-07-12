import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReportRow from '@/components/ReportRow.vue'

describe('ReportRow', () => {
  const reports = [
    {
      school: 'School A',
      division: 'Division A',
      conference: 'Conference A',
      ranking: 1,
      gpa: {
        min: 3.5,
        '25%': 3.75,
        '50%': 4.0,
        '75%': 4.25,
        max: 4.5
      },
      sat: {
        reading: { min: 500, max: 600 },
        math: { min: 600, max: 700 }
      },
      act: { min: 25, max: 30 }
    },
  ]
  const playerGpa = 3.8

  it('renders properly', () => {
    const wrapper = mount(ReportRow, {
      props: {
        reports,
        playerGpa
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('computes cell background color correctly', () => {
    const wrapper = mount(ReportRow, {
      props: {
        reports,
        playerGpa
      }
    })
    let cellBackgroundColor = wrapper.vm.cellBackgroundColor(1)
    expect(cellBackgroundColor).toBe('bg-blue-50')

    cellBackgroundColor = wrapper.vm.cellBackgroundColor(0)
    expect(cellBackgroundColor).toBe('bg-white')
  })

  it('computes cell gradient correctly', () => {
    const wrapper = mount(ReportRow, {
      props: {
        reports,
        playerGpa
      }
    })
    const cellGradient = wrapper.vm.cellGradient(4.2)

    expect(cellGradient).toBe('#d7737d')
  })
})
