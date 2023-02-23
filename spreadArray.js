const num=[1,3,5,6,7];


const arr1=num;
const arr2=[...arr1];


arr1.push(22);
arr2.push(33)
console.log(arr1);
console.log(arr2);

const [x,y,...z]=num;
console.log(x,y);
console.log(z);