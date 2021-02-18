// # Parrot Class Revisited
//
//
//
// To gain practice with ES2016 `Class` syntax, let's reimplement our talking parrot class from Challenge 116.
//
//
// ```
//
// class Parrot {
//  // ...
// }
//
// let polly = new Parrot("Polly");
// polly.speak();
// // returns "Polly want a cracker!"
//
// let benStiller = new Parrot("Ben");
// benStiller.speak();
// // returns "Ben want a cracker!"
//
// let anonymous = new Parrot();
// anonymous.speak();
// // returns "A nameless parrot want a cracker!"
//
//
// ```
//
//
// Update the class definition so the example code runs as shown.
//
// Once that works, let's create a **subclass** of Parrot called ApprenticeParrot that is too tired from reading _You Don't Know JS_ to speak on command.
//
//
// ```
//
// class ApprenticeParrot extends Parrot {
//  // ...
// }
//
// let apprentice = new ApprenticeParrot("Meg");
// apprentice.speak();
// // return "😴"
//
// ```
//
// #
//
// Bonus
//
//
// After invoking the speak function 3 times, on the 4th invocation, `ApprenticeParrot` should wake up and respond normally.


// 116
class Parrot {
  //default argument value
  constructor(name = "A nameless parrot") {
    this.name = name;
  }
  
  speak() {
    return `${this.name} want a cracker!`;
  }
}

class ApprenticeParrot extends Parrot {
  constructor(name) {
    super(name);
    //create counter variable
    this.count = 1;
  }
  
  //override super class
  speak() {
    if (this.count < 4) {
      // console.log(this.count);
      //increment before return statement
      this.count++
      return "😴";
    } else {
      this.count++;
      return `${this.name} want a cracker!`;
    }
  }
}

let apprentice = new ApprenticeParrot("Meg");
// apprentice.speak();
// apprentice.speak();
// apprentice.speak();
// apprentice.speak();
// console.log(apprentice.speak());

module.exports = {Parrot, ApprenticeParrot};
