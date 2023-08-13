// Using the super Method in JS.
class Pet{
    constructor(name){
        this.name = name;
        this.owner = null;
    }

    speak(){
        return `${this.name} speaks.`
    }
}


// Inheriting from the pet.
class Dog extends Pet{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    get info(){
        return `${this.name} is a ${this.breed}. ${super.speak()}`
    }
}

const creature = new Pet("The thing")
const dog = new Dog("Spot", "German Shepherd")

console.log(dog.info)
// console.log(dog.breed)