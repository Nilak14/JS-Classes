class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log('Generic animal sound!')
    }
}

class WildAnimal extends Animal {
    constructor(name) {
        super(name);
    }


    // !! Overtiring the method in child class is polymorphism 

    makeSound() {
        super.makeSound();
        console.log('Wild Animal Sound')
    }
}

let animal1 = new Animal('Lion');
animal1.makeSound()

let wild1 = new WildAnimal('Bear')
wild1.makeSound();