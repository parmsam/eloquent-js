// The sum of a range
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
const range = (start, end, step = 1) => {
  let array = [];
  if (start < end) {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
    }
  } else if (start >= end) {
    for (let i = start; i >= end; i = i + step) {
      array.push(i);
    }
  }
  return array
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
const sum = (numbers) => {
  let sum_total = 0;
  for (let number of numbers){
    sum_total += number;
  }
  return(sum_total);
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// // → 55

// Reversing an array
/*For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?*/
const reverseArray = (numbers) =>{
  let array1 = [];
  for(i=0; i < numbers.length; i++){
    array1.unshift(numbers[i]);
  }
  return(array1)
}
// reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements
const reverseArrayInPlace = (numbers) => {
  for(let i = 0; i < Math.floor(numbers.length / 2); i++){
    let old = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i];
    numbers[numbers.length - 1 - i] = old;
  }
  return numbers;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// A list
/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/
const arrayToList = (numbers) =>{
  let list_obj = null;
  for (let i of numbers.reverse()) {
    list_obj = {value: i, rest: list_obj};
  }
  return(list_obj);
}

const listToArray = (list) => {
  let obj = [];
  for (let node = list; node; node = node.rest) {
    obj.push(node.value);
  }
  return obj;
}

const prepend = (element, list) => {
  return {value: element, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Deep comparison
/*Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".*/
function deepEqual(a, b){
  if (typeof(a) === typeof(b) & a === b){
    return true
  } else{
    return false
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
