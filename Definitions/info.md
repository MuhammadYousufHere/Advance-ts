npx tsc --init

<!-- Generates ts config file -->

npx ts-node app.ts

<!-- Runs a ts file -->

npx tsc app.ts

<!-- compile ts into js -->

### TypeScript only enforce types at compile time not at runtime

### Annotate

Explictly telling ts the type of a variable;
i.e
let name : string = 'Asim'

### Infered

<!-- Something that's automatically done by ts -->

let num = 4;
here ts automatically infered that num type is number so we don't have to annotate
