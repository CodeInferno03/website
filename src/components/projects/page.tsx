import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import AboutButton from '../home/about'
import HomeButton from '../about/home'

function ProjectsPage() {
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
        My projects
      </Box>
      <HomeButton />
      <AboutButton />
    </React.Fragment>
  )
}

export default ProjectsPage
