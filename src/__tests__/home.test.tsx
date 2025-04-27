import {
  expect,
  it
} from 'vitest'
import App from '../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../components/home/page'
import WebsiteContextProvider from '../utils/contextProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

it('Renders', async () => {
  render(<App />)
})

it('Name text is present', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const textElement = await screen.findByText('Hi, I\'m Ishaan')
  expect(textElement).toBeVisible()
})

it('\'about\' button visible on home screen', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const projectsButton = await screen.findByText('projects')
  expect(projectsButton).toBeVisible()
})

it('\'home\' button not visible on home page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const homeButton = await screen.queryAllByText('home')
  expect(homeButton.length).toBe(0)
})

it('\'education\' button visible on home screen', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const educationButton = await screen.findByText('education')
  expect(educationButton).toBeVisible()
})

it('\'experience\' button visible on home screen', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const experienceButton = await screen.findByText('experience')
  expect(experienceButton).toBeVisible()
})
