import {
  expect,
  it
} from 'vitest'
import App from '../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import HomePage from '../../components/home/page'
import WebsiteContextProvider from '../utils/contextProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ProjectsPage from '../components/projects/page'
// import AboutPage from '../components/about/page'

it('Renders', async () => {
  render(<App />)
})

it('\'projects\' page renders text', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<ProjectsPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const textElement = await screen.findByText('My projects')
  expect(textElement).toBeVisible()
})

it('\'about\' button visible on projects page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.findByText('about')
  expect(aboutButton).toBeVisible()
})

it('\'project\' button not visible on projects page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const projectButton = await screen.queryAllByText('projects')
  expect(projectButton.length).toBe(0)
})

it('\'home\' button visible on projects page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const homeButton = await screen.findByText('home')
  expect(homeButton).toBeVisible()
})

it('\'home\' button visible on projects page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const educationButton = await screen.findByText('education')
  expect(educationButton).toBeVisible()
})
