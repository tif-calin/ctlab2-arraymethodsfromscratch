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
  for(let i = 0; i < arr.length; i++) if(arr[i] !== undefined) newArr[i] = callback(arr[i]);

  return newArr;
}

export function filter(arr, callback) {
  const newArr = [];
  for(const elem of arr)  if(elem !== undefined && callback(elem)) newArr[newArr.length] = elem;

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
  for(const elem of initialValue ? arr : arr.slice(1)) {
    // skip "holes" by making sure each element is not undefined
    if(elem !== undefined) acc = callback(acc, elem);
  }

  // return the accumulator
  return acc;
}

export function every(arr, callback) {
  /* here's the plan:
      1. we're gonna loop through our array and call the callback on each element
      2. as soon as we get an element that returns false, we return false as well, ending the loop
      3. if we never get false and the loop ends quietly, we return true
  */

  for(const elem of arr) {
    // don't forget to check for holes
    if(elem !== undefined && !callback(elem)) return false;
  }

  return true;
}
