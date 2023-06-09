class User {
  constructor(username, email) {
    //set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in!`);
    return this;
  }

  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username != user.username);
  }
}

const userOne = new User("mario", "mario@thenetninja.com");
const userTwo = new User("luigi", "luigi@thenetninja.com");
const userThree = new Admin(
  "shaun",
  "shuan@thenetninja.com",
  "black-belt-ninja"
);

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(users);

console.log(userThree);
