import { performance } from 'perf_hooks';


export function timing() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value;
    descriptor.value = async function (...params: any[]) {
      const start = performance.now();
      const result = await value.apply(this, params); //this - object we running against
      const end = performance.now();
      console.log({
        duration: end - start
      })
      return result;
    }
  }
}