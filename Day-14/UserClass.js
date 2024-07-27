(function () {
  // Classes in JavaScript
  class User {
    static _userCount = 0; // Static property to keep track of the user count

    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      User._userCount += 1; // Increment the user count whenever a new user is created
    }

    // Update age Method
    updateUserAge(age) {
      this.age = age;
    }

    // Static method to get the user count
    static getUserCount() {
      return User._userCount;
    }
  }

  const user1 = new User("Sushank", 17, "male");
  const user2 = new User("Alex", 21, "female");
  const user3 = new User("John", 67, "Male");

  // Updation of User Age
  console.log(user1);
  user1.updateUserAge(78);
  console.log(user1);
  // console.log(user2);
  // console.log(User.getUserCount()); // Outputs the number of users created

  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  class UserDetails extends User {
    constructor(name, age, work, gender) {
      super(name, age);
      this.work = work;
      this.gender = gender;
    }

    // Methods to get the details of the user
    getUserDetails() {
      console.log(
        `Name: ${this.name}, Age: ${this.age}, Work: ${this.work}, Gender: ${this.gender}`
      );
    }

    greetUsers() {
      console.log(`Hello user Mr. ${this.name}`);
    }
  }

  const user = new UserDetails("Sushank", 18, "Student", "Male");
  // console.log(user);
  // console.log(user.getUserDetails());
  // console.log(user.greetUsers());
  // console.log(user);
})();
