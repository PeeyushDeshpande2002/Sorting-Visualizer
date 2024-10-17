import React from 'react';
import { FormControl, Select, MenuItem, Slider, InputLabel, Box, Typography } from '@mui/material';

function Controls({ algorithm, setAlgorithm, range, setRange, color, setColor, speed, setSpeed }) {
  return (
    <Box sx={{ width: '250px', margin: '20px' }}>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Algorithm</InputLabel>
        <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
          <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
          <MenuItem value="quickSort">Quick Sort</MenuItem>
          <MenuItem value="mergeSort">Merge Sort</MenuItem>
        </Select>
      </FormControl>

      <Typography gutterBottom>Range</Typography>
      <Slider value={range} onChange={(e, value) => setRange(value)} min={10} max={30} />

      <FormControl fullWidth sx={{ mt: 3 }}>
        <InputLabel>Color</InputLabel>
        <Select value={color} onChange={(e) => setColor(e.target.value)}>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="green">Green</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 3 }}>
        <InputLabel>Speed</InputLabel>
        <Select value={speed} onChange={(e) => setSpeed(e.target.value)}>
          <MenuItem value="fast">Fast</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="slow">Slow</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Controls;
