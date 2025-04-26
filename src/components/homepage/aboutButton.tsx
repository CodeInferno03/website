// import * as React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

function AboutButton() {
  return (
    <Box>
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          color: '#000000'
        }}
      >
        about
      </Button>
    </Box>
  );
}

export default AboutButton
