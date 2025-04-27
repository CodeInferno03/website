import {
  expect,
  it
} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import WebsiteContextProvider from '../utils/contextProvider'
// import AboutPage from '../../components/about/page'
import userEvent from '@testing-library/user-event'
import ExperienceButton from '../components/home/experience'
// import AboutPage from '../../components/about/page'

it('\'education\' button navigates to \'education\' page', async () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <WebsiteContextProvider>
          <Routes>
            <Route path='/' element={<ExperienceButton />} />
            <Route path='/experience' element={<></>} />
          </Routes>
        </WebsiteContextProvider>
      </MemoryRouter>
  )
  await userEvent.click(await screen.findByText('experience'))
  const aboutButtonText = screen.queryAllByText('experience')
  expect(aboutButtonText.length).toBe(0)
})
