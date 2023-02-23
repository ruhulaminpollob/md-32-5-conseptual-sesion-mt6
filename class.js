class student {
    name;
    roll;
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
    details() {
        console.log(
            `My name is ${this.name}.My roll is ${this.roll}
            `
        );
    }
}

const student1 = new student('Pollob', 5);
const student2 = new student('kashem', 45);

student1.details()
student2.details()