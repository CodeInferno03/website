import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { WebsiteContext } from '../../utils/context';
// import '../../App.css'

function AboutButton() {
  const navigate = useNavigate()
  const goToAboutPage = () => {
    navigate('/about')
  }
  const {
    websiteTextColor,
    buttonFontSize,
    websiteFont
  } = React.useContext(WebsiteContext)!

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          // textTransform: 'none',
          color: websiteTextColor,
          fontSize: buttonFontSize,
          fontFamily: websiteFont
          // width: '25%'
        }}
        onClick={goToAboutPage}
      >
        about
      </Button>
    </Box>
  );
}

export default AboutButton
