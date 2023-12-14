const a = 6;

const arr1 = Array.from(Array(a).keys());
const arr2 = new Array(a).fill().map((_,index) => index);
console.log(arr1)
console.log(arr2)