const object={
    name:'Alex',
    work:'student',
    gender:'male'
}

const object1={...object};
const object2={...object1};
object1.female=false;

console.log(object1);
console.log(object2);



const {work:study,...rest}=object;


console.log(study);
console.log(rest);
