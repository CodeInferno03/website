import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { WebsiteContext } from '../../utils/context';

function EducationButton() {
  const navigate = useNavigate()
  const goToAboutPage = () => {
    navigate('/education')
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
          color: websiteTextColor,
          fontSize: buttonFontSize,
          fontFamily: websiteFont
          // width: '25%'
        }}
        onClick={goToAboutPage}
      >
        education
      </Button>
    </Box>
  );
}

export default EducationButton
