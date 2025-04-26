import {
  expect,
  it
} from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AboutButton from '../../components/homepage/aboutButton'

it('\'About button is shown\'', async () => {
  render(<AboutButton />)
  const aboutButton = await screen.findByText('about')
  expect(aboutButton).toBeVisible()
})
