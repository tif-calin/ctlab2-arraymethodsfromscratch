
export function map(arr, callback) {
  const newArr = [];
  for(const elem of arr) newArr.push(callback(elem));

  return newArr;
}
