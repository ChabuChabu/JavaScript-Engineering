//object literals

// const blogs = [
//   { title: "Why mac and cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];

// console.log(blogs);

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thenetninja.co,uk",
  location: "berlin",
  blogs: [
    { title: "Why mac and cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
  ],
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
      console.log(blog.title, blog.likes);
    });
  },
};

user.logBlogs();
