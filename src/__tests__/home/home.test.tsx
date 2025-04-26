import {
  expect,
  it
} from 'vitest'
import App from '../../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '../../components/homepage/homepage'

it('Renders', async () => {
  render(<App />)
})

it('Name text is present', async () => {
  render(<HomePage />)
  const textElement = await screen.findByText('Hi, I\'m Ishaan')
  expect(textElement).toBeVisible()
})

// it('\'About button is shown\'', async () => {
//   render(<HomePage />)
//   const aboutButton = await screen.findByText('about')
//   expect(aboutButton).toBeVisible()
// })
