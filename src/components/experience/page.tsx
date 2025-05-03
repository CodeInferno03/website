import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import ProjectButton from '../home/projects'
import HomeButton from '../about/home'
import EducationButton from '../home/education'
import AboutButton from '../home/about'

function ExperiencePage() {
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
        My experience
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <HomeButton />
        <AboutButton />
        <ProjectButton />
        <EducationButton />
      </Box>
    </React.Fragment>
  )
}

export default ExperiencePage
