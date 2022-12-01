// for each -- Doen't return anything 
function myForEach<T>(array: T[], cb: (v: T) => void): void {
  array.reduce((a, v) => {
    cb(v);
    return undefined
  }, undefined)
}
myForEach([1, 2, 3, 4], (n) => console.log('forEach', n.toString()))

//filter -- returns an array

function myFilter<T>(array: T[], cb: (value: T) => boolean): T[] {
  return array.reduce((acc, value) => (cb(value) ? [...acc, value] : acc), [])
}

console.log(myFilter([1, 2, 4, 5], (v) => v % 2 === 0))