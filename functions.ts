function addNumber(a:number,b:number):number {
    return a + b
}
const concatStr = (str:string, str_2: string) : string =>{
  return `${str} ${str_2}`
}

const fetchData = (uri:string): Promise<string> => {
 return Promise.resolve(`data frtch from ${uri}`)
}
const sayHi = (user:string): void => {
  console.log(`Hello, ${user}` )
}



// module.exports = addNumber // not supported
// export default addNumber // supported

export const util = {
  addNumber,
  concatStr
}