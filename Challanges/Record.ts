interface Animal {
  age: number;
  name: string;
}

type CatName = 'Milo' | 'Garfield' | 'Felix';

type DogName = 'Odie' | 'Snoopy' | 'Old Yeller';

// Record<Keys, Type>;
// Recored<Keys, Type> is a generic type that takes two type arguments.
// The first type argument is a union of string literals that specifies the keys of the resulting object.
// The second type argument is the type of the values of the resulting object.

const cats: Record<CatName, Animal> = {
  Felix: { age: 2, name: 'Felix' },
  Garfield: { age: 3, name: 'Garfield' },
  Milo: { age: 1, name: 'Milo' },
};

console.log(cats);
