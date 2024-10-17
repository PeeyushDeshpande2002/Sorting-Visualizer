import React from 'react';
import { Button, Box } from '@mui/material';

function ControlButtons({ startSort, resetArray }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
      <Button variant="contained" color="primary" onClick={resetArray} sx={{ mx: 2 }}>
        Change Values
      </Button>
      <Button variant="contained" color="secondary" onClick={startSort} sx={{ mx: 2 }}>
        Play
      </Button>
    </Box>
  );
}

export default ControlButtons;
