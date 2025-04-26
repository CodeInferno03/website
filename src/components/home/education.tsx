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
    websiteTextColor
  } = React.useContext(WebsiteContext)!

  return (
    <Box>
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          color: websiteTextColor
        }}
        onClick={goToAboutPage}
      >
        education
      </Button>
    </Box>
  );
}

export default EducationButton
