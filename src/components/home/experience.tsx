import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { WebsiteContext } from '../../utils/context';

function ExperienceButton() {
  const navigate = useNavigate()
  const goToAboutPage = () => {
    navigate('/experience')
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
          fontFamily: 'Oxanium, Arial, monospace'
          // width: '25%'
        }}
        onClick={goToAboutPage}
      >
        experience
      </Button>
    </Box>
  );
}

export default ExperienceButton
