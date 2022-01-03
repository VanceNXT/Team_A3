const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const trainersignup = require("./routers/signup");
const create = require("./routers/createcourse");
const courses = require("./routers/courses");
const email = require("./routers/email");
const adduser = require("./routers/adduser");

app.use(trainersignup);
app.use(create);
app.use(courses);
app.use(email);
app.use(adduser);

app.listen(port, () => {
  console.log(`port running on ${port}`);
});
