import {
  expect,
  it
} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import AboutButton from '../components/home/about'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import WebsiteContextProvider from '../utils/contextProvider'
// import AboutPage from '../../components/about/page'
import userEvent from '@testing-library/user-event'
import ProjectButton from '../components/home/projects'
// import AboutPage from '../../components/about/page'

it('\'projects\' button navigates to \'projects\' page', async () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <WebsiteContextProvider>
          <Routes>
            <Route path='/' element={<ProjectButton />} />
            <Route path='/projects' element={<></>} />
          </Routes>
        </WebsiteContextProvider>
      </MemoryRouter>
  )
  await userEvent.click(await screen.findByText('projects'))
  const aboutButtonText = screen.queryAllByText('projects')
  // expect(window.location.pathname).toBe('/projects')
  expect(aboutButtonText.length).toBe(0)
})
