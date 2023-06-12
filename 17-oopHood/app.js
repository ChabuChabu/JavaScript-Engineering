function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email) {
  User.call(this, username, email);
  this.title = this.title;
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin(
  "Shaun",
  "shaun@thenetninja.co.uk",
  "black-belt-ninja"
);

console.log(userOne, userTwo, userThree);

userOne.login();
userOne.logout();
