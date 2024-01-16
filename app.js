const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// connect to mongodb
const dbURI =
  "mongodb+srv://matdan:mypassword123@cluster0.ieyvivs.mongodb.net/node-tuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => app.listen(3001))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// midelware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// blog routes
app.use('/blogs',blogRoutes);

app.get("/about", (req, res) => {
  //res.send("<p>About</p>");
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
