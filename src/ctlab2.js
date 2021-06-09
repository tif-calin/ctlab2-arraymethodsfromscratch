/* eslint-disable no-prototype-builtins */
/*
export function map(arr, callback) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    const newElem = callback(elem);
    newArr[i] = newElem;
  }

  return newArr;
}
*/

export function map(arr, callback) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) 
    if(arr.hasOwnProperty(i)) newArr[i] = callback(arr[i]);

  return newArr;
}

export function filter(arr, callback) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++)  
    if(arr.hasOwnProperty(i) && callback(arr[i])) newArr[newArr.length] = arr[i];

  return newArr;
}

export function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) return i;
  }

  return -1;
}

export function reduce(arr, callback, initialValue) {
  // initialize our accumulator as initialValue (if exists) or the first element of the array
  let acc = initialValue || arr[0];

  // loop through our array, and for each element:
  //    call the callback on that element as well as the accumulator
  //    set the accumulator equal to the result of that
  for(let i = initialValue ? 0 : 1; i < arr.length; i++)
    if(arr.hasOwnProperty(i)) 
      acc = callback(acc, arr[i]);

  // return the accumulator
  return acc;
}

/*
alternative reduce solution 

export function reduce(arr, callback, initialValue) {
  let acc;

  for(let i = 0; i < arr.length; i++) {

    if(arr.hasOwnProperty(i)) {
      if(i === 0)
        acc = initialValue ? callback(initialValue, arr[0]) : arr[0];
      else 
        acc = callback(acc, arr[i]);
    }

  }

  return acc;
}
*/

export function every(arr, callback) {
  /* here's the plan:
      1. we're gonna loop through our array and call the callback on each element
      2. as soon as we get an element that returns false, we return false as well, ending the loop
      3. if we never get false and the loop ends quietly, we return true
  */

  for(let i = 0; i < arr.length; i++) {
    // don't forget to check for holes
    if(arr.hasOwnProperty(i) && !callback(arr[i])) return false;
  }

  return true;
}
