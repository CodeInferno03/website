import * as React from 'react'
import Box from '@mui/material/Box'
import AboutButton from './aboutButton'

function HomePage() {
  return (
    <React.Fragment>
      <Box
        component='div'
      >
        Hi, I'm Ishaan
      </Box>
      <Box>
        <AboutButton />
      </Box>
    </React.Fragment>
  )
}

export default HomePage
