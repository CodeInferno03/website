import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import ProjectButton from '../home/projects'
import HomeButton from './home'
import EducationButton from '../home/education'

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
      <HomeButton />
      <ProjectButton />
      <EducationButton />
    </React.Fragment>
  )
}

export default AboutPage
