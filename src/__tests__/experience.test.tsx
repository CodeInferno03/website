import {
  expect,
  it
} from 'vitest'
import App from '../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WebsiteContextProvider from '../utils/contextProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ExperiencePage from '../components/experience/page'

it('Renders', async () => {
  render(<App />)
})

it('Name text is present', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const textElement = await screen.findByText('My experience')
  expect(textElement).toBeVisible()
})

it('\'about\' button visible on experience page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('about')
  expect(aboutButton).toBeVisible()
})

it('\'projects\' button visible on experience page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('projects')
  expect(aboutButton).toBeVisible()
})

it('\'home\' button visible on experience page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const homeButton = await screen.findByText('home')
  expect(homeButton).toBeVisible()
})

it('\'education\' button visible on experience page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const educationButton = await screen.findByText('education')
  expect(educationButton).toBeVisible()
})

it('\'experience\' button not visible on experience page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/experience']}>
        <Routes>
          <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const experienceButton = await screen.queryAllByText('experience')
  expect(experienceButton.length).toBe(0)
})
