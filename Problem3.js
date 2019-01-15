// Problem 3:
// Create a Person class with three attributes: name, weight, and height. Create a method that can calculate the BMI of
// a person using the formula below. Create an object of the class and use the function.
// BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

 class Person
 {
     constructor(name, weight, height)
     {
         this.name = name;
         this.weight = weight;
         this.height = height;

     }

     printEverythingInHere()
     {
         console.log(this.name, this.weight, this.height);
     }

     changeWeight(bmi)
     {
         this.weight = bmi;
     }
 }

 var person1 = new Person("John", 160, 6);
 person1.printEverythingInHere();
 person1.changeWeight(" ");