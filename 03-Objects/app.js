//object literals

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co,uk",
  location: "berlin",
  blogs: ["Why mac and cheese rules", "10 things to make with marmite"],
  login: function () {
    console.log("The user logged in");
  },
  logout: function () {
    console.log("The user logged out");
  },
  logBlogs: function () {
    //console.log(this);
    console.log("This use has written the following blogs");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.logBlogs();
console.log(this);
