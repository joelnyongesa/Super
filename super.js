class Pet{
    constructor(name){
        this.name = name;
        this.owner = null;
    }

    static definition(){
        return `A pet is an animal kept primarily for a person's company.`
    }
}

// Dog that nherits from Pet
class Dog extends Pet{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    static definition(){
        return (
            super.definition() + `Dogs are one of the most common types of pets`
        );
    }
}

const creature = new Pet("The thing")
const dog = new Dog("Arma", "Dalmatian")

console.log(Pet.definition())
console.log(Dog.definition())