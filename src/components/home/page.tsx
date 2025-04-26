import * as React from 'react'
import Box from '@mui/material/Box'
import AboutButton from './about'
import { WebsiteContext } from '../../utils/context'

function HomePage() {
  const {
    websiteTextColor
  } = React.useContext(WebsiteContext)!
  
  return (
    <React.Fragment>
      <Box
        component='div'
        sx={{
          color: websiteTextColor
        }}
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
