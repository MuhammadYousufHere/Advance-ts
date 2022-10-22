//  optional parameter

const printUserData= (name:string, age:number, nickName?:number):void =>  {
  console.log(`This is ${name}${nickName ? `aka ${nickName}` :`` } and he is ${age} years old.`)
}

printUserData('Asim',33)

//

interface User {
  name:string,
  info?:{
    email?:string
  }
}

function getGmail(user:User):string{
  if(user.info) {
    return user.info.email! //! mean it could be udefined
  }
  return ''
}

function easyEmail(user:User):string {
  return user?.info?.email ?? ''
}


// Optional callback

const doStuff = (x:number,y:number, callback?:()=> void) {
  console.log([x,y])
  callback?.() // ! could do if statement but have nicer way
}