class person{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(`My name Is ${this.name}`)
    }
}


class student extends person{
    subject;
    roll;
    constructor(name,age,subject,roll){
        super(name,age);
        this.subject = subject;
        this.roll = roll;
    }
    showDetails(){
        console.log(this.name,this.age,this.subject,this.roll)
    }
}

class teacher extends person{
    
    faculty;
    designation;
    constructor(name,age,faculty,designation){
        super(name,age);
        this.faculty = faculty;
        this.designation = designation;
    }
    showDetails(){
        console.log(this.name,this.age,this.faculty,this.designation)
    }
}

const st=new student('Pollob',19, 'physics',5);
const sir=new teacher('Abul kashem',54,'physics','Lecturer')

st.showDetails();
sir.showDetails();