import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import AboutButton from '../home/about'
import HomeButton from '../about/home'
import EducationButton from '../home/education'
import ExperienceButton from '../home/experience'

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
      <EducationButton />
      <ExperienceButton />
    </React.Fragment>
  )
}

export default ProjectsPage
