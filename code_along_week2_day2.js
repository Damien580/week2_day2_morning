let person = {
    firstName: 'Damien',
    lastName: 'Redd',
    age: '42',

}
console.log(person)
console.log('======================')

let meal = {
    app: 'Calamari',
    entree: 'Veal Parmesan',
    dessert: 'Tira Misu',
    drink: 'Tea'
}

let {entree} = meal

console.log(entree)
console.log(meal.entree)

let {app, dessert, drink} = meal

console.log(app,dessert,drink)

// let {app, dessert, drink} = meal     //This is how to rename an item for recalling it.

// console.log(app, dessert, drink: favTea) = meal

// console.log(app,dessert,favTea)

console.log('====================')

for (key in meal){          //this will log each string under each key 
    console.log(meal[key])
}

person.job = 'Chef'         //to assigna new key to an object, and its value
console.log(person)

delete person.age       //to delete a key
console.log(person)

person.isCool = false
console.log(person)

person.isCool = true     //can reassign value of a key
console.log(person)

console.log('====================================================')

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    speak(times){
        for(let i=0; i < times; i++){
        console.log(`Hello, my name is ${this.name}`)
        }
    }
}

let mollie = new Dog ('Mollie', 'Hound', 4)
console.log(mollie)

let roxie = new Dog('Roxie', 'Doberman', 3)

roxie.speak(1)

class Puppy extends Dog {
    constructor(name,breed,age,trainingLevel){
        super(name,breed,age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }
}

let daisy = new Puppy('Daisy', 'Heeler', 2, 0)

daisy.levelUp()
daisy.speak(2)

daisy.breed = 'Beagle'

console.log(daisy)