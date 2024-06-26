//Flattening
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
flat_array = []
// console.log(reduce(arrays, (a, b) => flat_array.concat(a,b), 0));

//Your own loop
// Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.
// Your code here.
let loop = (value, test, update, func) => {
  for (let i = value; test(i); i = update(i)) {
    func(i);
  }
};
loop(3, n => n > 0, n => n - 1, console.log);

//Everything
// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// for loop method
function every(array, test) {
  // Your code here.
  i = true;
  for (let element of array) {
    if (!test(element)) {
      i = !i;
    }
  }
  return i;
}
// some method
function every(array, test) {
  // Your code here.
  return !array.some(n => !test(n))
}

// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

//skipping problem
// function dominantDirection(text) {
//   // Your code here.
//   let [ltr, rtl, ttb] = [0, 0, 0];
//   for (let char of text) {
//     if (char.direction == 'ltr') {
//       ltr++;
//     } else if (char.direction == 'rtl') {
//       rtl++;
//     }
//     else {
//       ttb++;
//     }
//   }
//   if (ltr > rtl && ltr > ttb) {
//     return 'ltr';
//   }
//   else if (rtl > ltr && rtl > ttb) {
//     return 'rtl';
//   }
//   else {
//     return 'ttb';
//   }
// }

