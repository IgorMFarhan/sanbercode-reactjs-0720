// Soal 1
console.log('(-----SOAL NO.1----)')

const newFunction = function literal(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName(){
            alert(firstName + " " + lastName)
            return 
        }
    }
}
newFunction("William", "Imoh").fullName()

// Soal 2
console.log('(-----SOAL NO.2----)')

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation} = newObject

console.log(firstName, lastName, destination, occupation)

// Soal 3
console.log('(-----SOAL NO.3----)')

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [...west,...east]
//Driver Code
console.log(combined)
