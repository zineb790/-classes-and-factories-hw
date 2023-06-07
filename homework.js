//hamster
class Hamster{
    constructor(owner, name,price) {
        this.owner = ""
        this.name = name
        this.price=15
    }
    wheelRun() {
        console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        return this.price
    }
}
const hamster1= new Hamster("me","hamstry")
hamster1.owner="me"
console.log(hamster1)
//person
class Person{
    constructor(name,age,height,weight,mood,hamsters,bankAccount) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = mood
        this.hamsters = []
        this.bankAccount = 0
        
    }
    getName() {
        return this.name
    }
    getAge() {
       return this.age 
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(this.name)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10

    }
    buyHamster(hamster) {
        this.hamsters.push(hamster1)
        this.mood += 10
        this.bankAccount-= this.getPrice
        

        
    }
    
}
