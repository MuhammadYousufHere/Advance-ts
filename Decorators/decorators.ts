import { performance } from 'perf_hooks';

export function logTiming<T extends { new(...params: any[]): {} }>(constructor: T) {
  return class extends constructor {
    __timing = []
  }
}

interface thisWithTiming {
  __timing: unknown[]
}

export function timing<T>() {
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
      if ((this as thisWithTiming).__timing) {
        (this as thisWithTiming).__timing.push({
          method: propertyKey,
          time: start - end,
        })
      } else {

      }
      console.log({
        duration: end - start
      })
      return result;
    }
  }
}