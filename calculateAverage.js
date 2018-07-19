// Calculate average

// Write function avg which calculates average of numbers in given list.


// -----------
// My Solution
// -----------

function find_average(array) {
    let total = 0
    let mean = 0;
  
    array.forEach(num => {
      total += num;
    });
  
    mean = total / array.length;
    
    return mean;
}