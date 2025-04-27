import * as React from 'react'
import Box from '@mui/material/Box'
import AboutButton from './about'
import { WebsiteContext } from '../../utils/context'
import ProjectButton from './projects'
import EducationButton from './education'
import ExperienceButton from './experience'

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
      <AboutButton />
      <ProjectButton />
      <EducationButton />
      <ExperienceButton />
    </React.Fragment>
  )
}

export default HomePage
