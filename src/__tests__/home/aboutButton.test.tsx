import {
  expect,
  it
} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutButton from '../../components/home/about'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import WebsiteContextProvider from '../../utils/contextProvider'
// import AboutPage from '../../components/about/page'
import userEvent from '@testing-library/user-event'
// import AboutPage from '../../components/about/page'

it('\'about\' button is shown', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<AboutButton />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('about')
  expect(aboutButton).toBeVisible()
})

it('\'about\' button navigates to \'about\' page', async () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <WebsiteContextProvider>
          <Routes>
            <Route path='/' element={<AboutButton />} />
          </Routes>
        </WebsiteContextProvider>
      </MemoryRouter>
  )
  await userEvent.click(await screen.findByText('about'))
  const aboutButtonText = screen.queryAllByText('about')
  expect(aboutButtonText.length).toBe(0)
})

