import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileImage from '@/components/ProfileImage.vue'

describe('ProfileImage', () => {
  const profileImage = 'path/to/image.jpg'
  const initials = 'AB'

  it('renders properly with profile image', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        profileImage,
        initials
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders properly without profile image', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        initials,
        profileImage: null
      }
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
  })

  it('computes background color correctly', () => {
    const wrapper = mount(ProfileImage, {
      props: {
        initials,
        profileImage: null
      }
    })
    const backgroundColor = wrapper.vm.backgroundColor

    expect(backgroundColor).toMatch(/^#[0-9A-Fa-f]{6}$/)
  })
})
