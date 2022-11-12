// only used for classes

// Generic - Strongly typed
const delay = <T>(time: number, data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}


class Users {
  async getUsers() {
    return await delay(1000, [])
  }
  async getUser(id: number) {
    return await delay(50, {
      id: `user:${id}`
    })
  }
}

(async function () {
  const users = new Users()
  const user = await users.getUser(32)

  console.log(`Got user: ${JSON.stringify(user)}`)
  await users.getUser(3)
  await users.getUser(2)

})()