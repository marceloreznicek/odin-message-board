const express = require("express")
const path = require("node:path")
const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.get("/", (req, res) => res.render("index", {messages: messages}))

app.get("/new", (req, res) => {
  res.render("messageNew")
})

app.post("/new", (req, res) => {
  console.log("New message arrived")

  console.log({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  })

  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  })

  res.redirect("/")
})


app.listen(3000, () => console.log("server is running on http://localhost:3000"))
