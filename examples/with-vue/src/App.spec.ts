import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import waitFor from 'wait-for-expect'
import App from './App.vue'

describe('App', () => {
  it('renders the user greeting', async () => {
    const wrapper = mount(App)

    await waitFor(() => {
      expect(wrapper.get('#greeting').text()).toBe('Hello, John!')
    })
  })

  it('renders the list of movies', async () => {
    const wrapper = mount(App)

    const fetchMoviesButton = wrapper.get('button')
    await fetchMoviesButton.trigger('click')

    const movieList = wrapper.get('#movies')

    await waitFor(() => {
      const movieItems = movieList.findAll('li')

      expect(movieItems.at(0)?.text()).toBe('The Lord of The Rings')
      expect(movieItems.at(1)?.text()).toBe('The Matrix')
      expect(movieItems.at(2)?.text()).toBe(
        'Star Wars: The Empire Strikes Back',
      )
      expect(movieItems.length).toBe(3)
    })
  })
})
