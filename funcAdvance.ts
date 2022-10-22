// Functions takes a func as arg

const hoc = (text: string, callback: (...args: any) => void): void => {
  console.log(text);
  callback();
};

/////////////////

type MultArrayType = (n:number) => number


const multArr = (numbers: number[], callback: MultArrayType) => {
  return numbers.map(callback);
};

console.log(multArr([2,4,5],(n)=> n * 4))

////////////////// function returns a func --- Clousure

// const adder = (value:number):(num: number) => number
// or 
const adder = (value:number): MultArrayType=> {
  return (num:number)=> value + num
}

const fix = adder(12);
console.log(fix(3))