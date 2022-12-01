const delay = (ms: number) => new Promise((resolve) => setTimeout(() => resolve, ms))

const runAsync = async (cb: (arg: string) => void) => {
  await delay(1000); // wait for 1s
  cb('1s')
  await delay(1000);
  cb('2s')
  await delay(1000);
  cb('3s')
}

runAsync((time) => console.log(time)) 