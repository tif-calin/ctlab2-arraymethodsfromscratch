/*

const arr = [0, -5, 34, 3];

arr.map(n => n ** 2);

function map = ...

const callback = n => n ** 2;
map(arr, callback);

function callback(n) {
  return n + 5;
}

*/

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
  for(let i = 0; i < arr.length; i++) newArr[i] = callback(arr[i]);

  return newArr;
}

export function filter(arr, callback) {
  const newArr = [];
  for(const elem of arr) if(callback(elem)) newArr[newArr.length] = elem;

  return newArr;
}

export function findIndex(arr, elem) {
  return;
}
