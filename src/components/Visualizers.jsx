import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Visualizer({ array }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '300px' }}>
      <Grid container spacing={1} justifyContent="center" alignItems="flex-end">
        {array.map((value, index) => (
          <Grid item key={index}>
            <Box sx={{ textAlign: 'center', color: '#000', mb: '10px' }}>
              <Typography variant="body2">{value}</Typography>
            </Box>
            <Box
              sx={{
                width: '10px',
                height: `${value * 3}px`,
                backgroundColor: '#2196f3',
                transition: 'height 0.3s',
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Visualizer;
