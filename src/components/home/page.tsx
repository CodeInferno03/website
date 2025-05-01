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
        position='absolute'
        sx={{
          color: websiteTextColor,
          // bgcolor: 'blue',
          width: '40%',
          left: 10,
          top: 0,
          fontSize: '80px',
          whiteSpace: 'pre-line',
          paddingTop: '1%'
        }}
      >
        {'Hi,\nI\'m Ishaan'}
      </Box>
      <Box
        component='div'
        display='flex'
        position='absolute'
        sx={{
          justifyContent: 'space-between',
          // bgcolor: 'red',
          width: '60%',
          right: 0,
          top: 0,
          paddingTop: '2%'
        }}
      >
        <AboutButton />
        <ProjectButton />
        <EducationButton />
        <ExperienceButton />
      </Box>
    </React.Fragment>
  )
}

export default HomePage
