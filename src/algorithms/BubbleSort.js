export function bubbleSort(arr, setSteps) {
    let steps = [];
    let newArr = [...arr]; // Copy of the original array
  
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = 0; j < newArr.length - i - 1; j++) {
        if (newArr[j] > newArr[j + 1]) {
          // Swap elements
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
        // Push the current state of the array to the steps for visualization
        steps.push([...newArr]);
      }
    }
  
    // Set the steps for visualization
    setSteps(steps);
  }
  