console.log("********** CLASSES RECALL**********");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} Logged in successfully ya'll!`);
  }
  logout() {
    console.log(`${this.username} Logged out successfully ya'll`);
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => (u = u.username != user.username));
  }
}

const userOne = new User("Chabu Chabu", "chabuchabi32@gmail.com");
const userTwo = new User("Ivwanji", "Ivwanji@yahoo.com");
const userThree = new Admin("Paul", "paul@yahoo.com", "Administrator");

let users = [userOne, userTwo, userThree];

console.log(userOne);
console.log(userTwo);
console.log(userThree);

userOne.login();
userTwo.logout();

userThree.deleteUser(userOne);
console.log(users);
