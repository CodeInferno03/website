import {
  // expect,
  it
} from 'vitest'
import App from '../../App'
import {
  render,
  // screen
} from '@testing-library/react'
import '@testing-library/jest-dom'

it('Renders', async () => {
  render(<App />)
})

