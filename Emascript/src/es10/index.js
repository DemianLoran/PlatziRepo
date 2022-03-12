//let array = [ 1,2,3, [ 1,2,3, [ 1,2,3 ]]];

const array1 = [1, 2, [3, 4]];
const vari = array1.flat[1];
console.log(vari);
//console.log(array1.flat(0));
console.log(array1.flatMap(value => [value, value *2]));

let hello = '        hello world            ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

