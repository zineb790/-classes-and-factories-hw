//class hamster
class Hamster{
    constructor(owner, name,price) {
        this.owner = ""
        this.name = name
        this.price=15
    }
    wheelRun() {
        console.log(`${this.name } says squeak squeak `)
    }
    eatFood() {
        console.log(`${this.name } always nible nible`)
    }
    getPrice() {
        return this.price
    }
}
const hamster1= new Hamster("me","hamstry")
hamster1.owner="me"
hamster1.wheelRun() 
hamster1.eatFood()
console.log(hamster1)
console.log("////////////////////")
console.log("")
//class person
class Person {
    constructor(name,age=0,height=0,weight=0,mood=0,hamsters=[],bankAccount=0) {
      
        this.name = name
        this.age =age
        this.height =height
        this.weight = weight
        this.mood = mood
        this.hamsters =hamsters
        this.bankAccount =bankAccount
        
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
        console.log(`hello ${this.name}!`)
    }
    eat() {
      this.weight++
      this.mood++
       console.log(`your weight is ${this.weight++}`)
       console.log(`your mood is ${this.mood++}`) 
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
    buyHamster(hamster1) {
        this.hamsters.push(hamster1)
        this.mood += 10
        this.bankAccount-= getPrice()
        
    }
  buyGus(){
    console.log("Timmy bought Gus")
  }
    
}
const person1= new Person("freddy",11,145,150,100,["family","friends"],200)
console.log(person1);
person1.greet()
person1.eat()



console.log("//////////////////////")
console.log("")

//Create a Story with your Person class
const Timmy = new Person("Timmy",5)
console.log(Timmy)

  for(i=0;i<=5;i++){
    console.log("Timmy is eating..")
  
  }
console.log()
 for(i=0;i<=5;i++){
    console.log("Timmy is exercicing..")
  }
  console.log()
Timmy.age = 9
console.log(Timmy)
console.log()
const Gus = new 
  Hamster("Timmy","Gus")
console.log()
Gus.owner="Timmy"
Timmy.buyGus()
console.log()
console.log(Gus)
console.log()
for(i=0;i<=1;i++){
    console.log("Timmy is eating..")
  }
console.log()
for(i=0;i<=1;i++){
    console.log("Timmy is exercicing..")
  }
console.log()

//chef make dinners
class Dinner{
constructor(appetizer, entree , dessert){
  this.appetize=appetizer
  this. entree= entree
  this.dessert=dessert
  
}

}
const myDinner=new Dinner("olives","salad","brownie")
console.log( myDinner)
console.log()


  

