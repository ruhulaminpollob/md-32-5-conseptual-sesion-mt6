const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]


let newObject={};

const create=Persons.forEach(x=>{
    const id=x.id;
    const value=x.name;
    newObject[id]=value;
})



console.log(newObject);





