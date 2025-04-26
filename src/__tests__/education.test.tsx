import {
  expect,
  it
} from 'vitest'
import App from '../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WebsiteContextProvider from '../utils/contextProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import EducationPage from '../components/education/page'

it('Renders', async () => {
  render(<App />)
})

it('Name text is present', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/education']}>
        <Routes>
          <Route path='/education' element={<EducationPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const textElement = await screen.findByText('My education')
  expect(textElement).toBeVisible()
})

it('\'about\' button visible on home screen', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/education']}>
        <Routes>
          <Route path='/education' element={<EducationPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('about')
  expect(aboutButton).toBeVisible()
})

it('\'projects\' button visible on home screen', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/education']}>
        <Routes>
          <Route path='/education' element={<EducationPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('projects')
  expect(aboutButton).toBeVisible()
})

it('\'home\' button visible on education page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/education']}>
        <Routes>
          <Route path='/education' element={<EducationPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const homeButton = await screen.findByText('home')
  expect(homeButton).toBeVisible()
})

it('\'education\' button not visible on education page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/education']}>
        <Routes>
          <Route path='/education' element={<EducationPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const educationButton = await screen.queryAllByText('education')
  expect(educationButton.length).toBe(0)
})
