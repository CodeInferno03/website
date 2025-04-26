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
import AboutPage from '../components/about/page'

it('Renders', async () => {
  render(<App />)
})

it('\'about\' page renders text', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const textElement = await screen.findByText('About me')
  expect(textElement).toBeVisible()
})

it('\'about\' button not visible on about page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const aboutButton = await screen.queryAllByText('about')
  expect(aboutButton.length).toBe(0)
})

it('\'projects\' button visible on about page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const projectsButton = await screen.findByText('projects')
  expect(projectsButton).toBeVisible()
})

it('\'home\' button visible on about page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const homeButton = await screen.findByText('home')
  expect(homeButton).toBeVisible()
})

it('\'education\' button visible on about page', async () => {
  render(
    <WebsiteContextProvider>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    </WebsiteContextProvider>
  )
  const educationButton = await screen.findByText('education')
  expect(educationButton).toBeVisible()
})
