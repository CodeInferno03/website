import * as React from 'react'
import Box from '@mui/material/Box'
import { WebsiteContext } from '../../utils/context'
import ProjectButton from '../home/projects'
import HomeButton from '../about/home'
import AboutButton from '../home/about'


function EducationPage() {
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
        My education
      </Box>
      <HomeButton />
      <AboutButton />
      <ProjectButton />
    </React.Fragment>
  )
}

export default EducationPage
