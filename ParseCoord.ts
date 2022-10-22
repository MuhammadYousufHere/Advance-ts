// Function overloading

interface Coordinate {
  x:number;
  y:number;
}

function parseCoordinateFromObj (obj:Coordinate) {
  return {
    ...obj
  }
}
function parseCoordinateFromNumber (x:number,y:number):Coordinate {
  return {
  x,y
  }
}

function parseCoordinate(strg:string) : Coordinate;
function parseCoordinate(obj:Coordinate) : Coordinate;
function parseCoordinate(x:number,y:number) : Coordinate;
function parseCoordinate(arg1:unknown, arg2? : unknown) : Coordinate {
  let coord : Coordinate = {
    x:0,
    y:0
  }

  if(typeof arg1 === 'object') {
   coord = {
    ...arg1 as Coordinate
   }
  } else if (typeof arg1 === 'string') {
  (arg1 as string).split(',').forEach((str)=> {
    const [key, value] = str.split(':');

    coord[key as 'x' | 'y'] = parseInt(value,10)
  });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }
  return coord;
}

console.log(parseCoordinate({x:3,y:23}))
console.log(parseCoordinate(3,23))
console.log(parseCoordinate('x:33,y:33'))