// Tuples
// fixed length array

type ThreeDimCoordinate = [x:number,y:number,z:number];

const add3DCoordinates =(coordinate0:ThreeDimCoordinate, coordinate1:ThreeDimCoordinate):ThreeDimCoordinate =>{
  return [coordinate0[0] + coordinate1[0], coordinate0[1] + coordinate1[1], coordinate0[2] + coordinate1[2]]
}

console.log(add3DCoordinates([2,4,6],[3,35,0]))

// react example
//tuples
const useString = (initialVal : string):[()=> string, (v:string) => void] => {
  let str:string = initialVal;
  return [
    ()=> str,
    (v:string) => {
      str = v
    }
  ]
}

const [usernName,setUserName] = useString('Yousuf')

console.log(usernName())
setUserName('Asim')
console.log(usernName())
