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
  const aboutButton = await screen.findByText('projects')
  expect(aboutButton).toBeVisible()
})
