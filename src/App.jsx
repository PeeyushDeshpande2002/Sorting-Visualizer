import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import Controls from './components/ControlBar';
import Visualizer from './components/Visualizers';
import ControlButton from './components/Controls';
import Header from './components/Header';
import {bubbleSort} from './algorithms/BubbleSort';
import {insertionSort} from './algorithms/InsertionSort';
import {mergeSort} from './algorithms/MergeSort';
import {quickSort} from './algorithms/QuickSort';
import {selectionSort} from './algorithms/SelectionSort';

function App() {
  const [algorithm, setAlgorithm] = useState('bubbleSort');
  const [range, setRange] = useState(50);
  const [color, setColor] = useState('blue');
  const [speed, setSpeed] = useState('fast');
  const [array, setArray] = useState(generateArray(range));

  function generateArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 10);
  }

  const startSort = () => {
    // Start sorting algorithm logic here
      let sortingSpeed = speed === 'fast' ? 100 : speed === 'medium' ? 300 : 500;
    
      switch (algorithm) {
        case 'bubbleSort':
          bubbleSort(array, setArray, sortingSpeed);
          break;
        case 'selectionSort':
          selectionSort(array, setArray, sortingSpeed);
          break;
        case 'insertionSort':
          insertionSort(array, setArray, sortingSpeed);
          break;
        case 'mergeSort':
          mergeSort(array, setArray, sortingSpeed);
          break;
        case 'quickSort':
          quickSort(array, setArray, sortingSpeed);
          break;
        default:
          break;
      }
    };

  const resetArray = () => {
    setArray(generateArray(range));
  };
  const renderBars = (array, color) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '300px' }}>
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              width: '10px', // Adjust based on the number of elements
              height: `${value * 3}px`, // Scale the height based on the array value
              backgroundColor: color, // Set bar color
              margin: '0 2px', // Add margin for spacing
              transition: 'height 0.3s ease', // Add smooth transitions
            }}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', alignItems: 'center' }}>
          <Controls
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            range={range}
            setRange={setRange}
            color={color}
            setColor={setColor}
            speed={speed}
            setSpeed={setSpeed}
          />
          <Visualizer array={array} />
        </Paper>
        <ControlButton startSort={startSort} resetArray={resetArray} />
        <div style={{ marginTop: '20px' }}>
        {renderBars(array, color)}
      </div>
      </Container>
    </div>
  );
}

export default App;
