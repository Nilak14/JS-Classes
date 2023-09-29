class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`)
    }
}

class programmers extends Person {
    constructor(name, age, experience) {
        super(name, age);  // super call the constructor of parent class
        this.experience = experience
    }

    code() {
        console.log(`${this.name} is coding`)
    }
}

let per1 = new Person('Nilak', 22)
let programmer1 = new programmers('Dom', 35, 10)

console.log(per1)
console.log(programmer1)
programmer1.describe()

const programmer = [
    new programmers('Dom', 35, 10),
    new programmers('Nilak', 20, 5),
]

function developer(programmers) {
    programmers.forEach(element => {
        element.describe();
        element.code();
    });
}

developer(programmer)