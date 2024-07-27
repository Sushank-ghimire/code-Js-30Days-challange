// Banking work system inside a class in JavaScript

class CreateBankAccount {
  static _balance = 0;

  // Creating Account with deposite and user Details
  constructor(name, age, gender, deposite) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this._deposite = deposite;
    CreateBankAccount._balance += deposite;
  }

  // Getting the total balance of the account
  get balance() {
    return CreateBankAccount._balance;
  }

  // Deposite of Balance
  deposite(amount) {
    if (amount < 0 || amount === 0) {
      throw Error("Amount cannot be negative");
    } else {
      this._deposite += amount;
    }
  }

  // Setter for balance (optional, you may not need this)
  set balance(newBalance) {
    if (newBalance >= 0) {
      this._balance = newBalance;
    } else {
      console.log("Balance must be a non-negative number.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this._balance}.`);
    } else if (amount > this._balance) {
      console.log("Insufficient funds.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  // Method to get account details
  getAccountDetails() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Balance: ${this._balance}`
    );
  }
}

const account1 = new CreateBankAccount("Sushank", 17, "male", 1000);
account1.getAccountDetails(); // Outputs: Name: Sushank, Age: 17, Gender: male, Balance: 1000
account1.deposite(500); // Outputs: Deposited 500. New balance is 1500.
account1.withdraw(200); // Outputs: Withdrew 200. New balance is 1300.
account1.withdraw(1500); // Outputs: Insufficient funds.

console.log(account1.balance); // Outputs: 1300
account1.balance = 500; // Use with caution
console.log(account1.balance); // Outputs: 500

// Trying to set an invalid balance
account1.balance = -100; // Outputs: Balance must be a non-negative number.
console.log(account1);
account1.deposite(1244);
account1.withdraw(490);
console.log(account1);
