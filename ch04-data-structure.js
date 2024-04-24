// The sum of a range
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
let range = (start, end, order = 1) => {
  let range_array = [start];
  if(order == 1){
    while (start < end){
      start++;
      range_array.push(start);
    }
  } else if (order == -1){
    while (start > end){
      start--;
      range_array.push(start);
    }
  }
  return(range_array);
}
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
let sum = (numbers) => {
  let sum_total = 0;
  for (let number of numbers){
    sum_total += number;
  }
  return(sum_total);
}
//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

//answer abovex`

// Reversing an array
/*For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?*/
let reverseArray = (numbers) =>{
  let array1 = [];
  for(i=0; i < numbers.length; i++){
    array1.unshift(numbers[i]);
  }
  return(array1)
}

// A list
/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/
let arrayToList = (numbers) =>{
  let list_obj = null;
  for(let i of numbers){
  	list_obj = {value: i, rest: list_obj};
  }
  return(list_obj);
}

let listToArray = (list) => {
  let obj = [];
  for (let node = list; node; node = node.rest) {
    obj.push(node.value);
  }
  return obj;
}

let prepend = (element, list) => {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
// Deep comparison
/*Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".*/
function deepEqual(a, b){
  if (typeof(a) === typeof(b) & a === b){
    true
  } else{
    false
  }
}
