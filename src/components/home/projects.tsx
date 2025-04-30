import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { WebsiteContext } from '../../utils/context';

function ProjectButton() {
  const navigate = useNavigate()
  const toToProjectsPage = () => {
    navigate('/projects')
  }
  const {
    websiteTextColor,
    buttonFontSize
  } = React.useContext(WebsiteContext)!

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          // textTransform: 'none',
          color: websiteTextColor,
          fontSize: buttonFontSize,
          // width: '25%'
        }}
        onClick={toToProjectsPage}
      >
        projects
      </Button>
    </Box>
  );
}

export default ProjectButton
