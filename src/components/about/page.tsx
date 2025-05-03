import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import ProjectButton from '../home/projects'
import HomeButton from './home'
import EducationButton from '../home/education'
import ExperienceButton from '../home/experience'

function AboutPage() {
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
        About me
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <HomeButton />
        <ProjectButton />
        <EducationButton />
        <ExperienceButton />
      </Box>
    </React.Fragment>
  )
}

export default AboutPage
