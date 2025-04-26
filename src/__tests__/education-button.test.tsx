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
import EducationButton from '../components/home/education'
// import AboutPage from '../../components/about/page'

it('\'education\' button navigates to \'education\' page', async () => {
  render(
      <MemoryRouter initialEntries={['/']}>
        <WebsiteContextProvider>
          <Routes>
            <Route path='/' element={<EducationButton />} />
            <Route path='/education' element={<></>} />
          </Routes>
        </WebsiteContextProvider>
      </MemoryRouter>
  )
  await userEvent.click(await screen.findByText('education'))
  const aboutButtonText = screen.queryAllByText('education')
  expect(aboutButtonText.length).toBe(0)
})
