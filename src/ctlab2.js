
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
