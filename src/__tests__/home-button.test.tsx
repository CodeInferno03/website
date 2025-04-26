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
import HomeButton from '../components/about/home'
// import AboutPage from '../../components/about/page'

it('\'home\' button navigates to home page', async () => {
  render(
      <MemoryRouter initialEntries={['/about']}>
        <WebsiteContextProvider>
          <Routes>
            <Route path='/about' element={<HomeButton />} />
            <Route path='/' element={<></>} />
          </Routes>
        </WebsiteContextProvider>
      </MemoryRouter>
  )
  await userEvent.click(await screen.findByText('home'))
  const aboutButtonText = screen.queryAllByText('home')
  expect(aboutButtonText.length).toBe(0)
})
