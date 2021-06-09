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
