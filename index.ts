let userName :string = 'Hammad' ;
let age :number = 15;
let online:boolean = true;
let userRegex: RegExp = /[a-z]/g
// Array
let userPets: string[] = ['Dog', 'Cat']
// generic type
let userFavColors: Array<string | number> = ['red','blue', 24]


interface userData {
  name: string;
  age: number;
  isOnline: boolean;
  userPetsName: string[];
}
type userDataType = {
  name: string;
  age: number;
  isOnline: boolean;
  userPetsName: string[];
}

let userBio: userDataType = {
  name:userName,
  age,
  isOnline:online,
  userPetsName:userPets
}

console.log(userBio)