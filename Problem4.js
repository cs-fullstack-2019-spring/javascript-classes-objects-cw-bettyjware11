//Create a Bank class with the the name and balance attributes. Afterwards, create an object of the class and follow the
// instructions below:
// Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts

class Bank{
    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;

    }

    greeting(){
        alert("Hello " + this.name);
    }

    addMessage(value)
    {
        alert(value + this.age);
    }

    changeBalance(numberToChangeItBy)
    {
        this.balance = this.balance + numberToChangeItBy;
    }
}

var mattsAccount = new bank(1000);
var myAccount = new bank(0);


alert(mattsAccount.balance);
mattsAccount.changeBalance(-100);
alert(mattsAccount.balance);
mattaddMessage("Your account balance is")


