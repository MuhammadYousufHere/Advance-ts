import houses from './Houses';
import housesJson from './Houses.json';
//resolveJsonModule: true


interface House {
  name:string;
  planets:string | string[] //union type
}

// you can extend interface like classes
interface HouseWithId extends House {
  id:number;
}


// function findHouses(houses:string):HouseWithId[];
// function findHouses(houses:string, filter:(house:House)=> boolean):HouseWithId[];
// function findHouses(house: House[]):HouseWithId[];
// function findHouses(house: House[], filter:(house:House)=> boolean):HouseWithId[]
function findHouses(input: string | House[], filter?:(house:House)=> boolean):HouseWithId[] {
  const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;


  return (filter? houses.filter(filter) : houses).map((house)=> ({
    id:Math.floor(Math.random() * 3333),
    ...house
  }))
}

console.log(findHouses(JSON.stringify(houses), ({name})=> name === 'Atreides'))
console.log(findHouses(houses, ({name})=> name === 'Harkonnen'))
console.log(findHouses(housesJson, ({name})=> name === 'Harkonnen'))