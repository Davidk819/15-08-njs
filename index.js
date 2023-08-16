const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const allUsers = require("./functions");

const users = [
  { id: 1, email: "user1@example.com", password: "password123" },
  { id: 2, email: "user2@example.com", password: "securepass" },
  { id: 3, email: "user3@example.com", password: "12345" },
];

const code = {}
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});


app.use(bodyParser.json());
app.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json(users[id - 1].email + users[id - 1].password);
});
app.get("/", (req, res) => {
  res.json(users)
});

app.post("/",async (req, res) => {
  let newUser = req.body;
  for (const user of users) {
    if (user.email === newUser.email) {
      return res.send("the email address already in use");
    }
  }
  const newPassword = await bcrypt.hash(req.body.password,8);
  newUser.id = uuidv4();
  newUser.password = newPassword
  users.push(newUser);
  res.send("user save");
});

app.put("/:id", (req, res) => {
  let myId = req.body.id;
  const user = users.find((user) => user.id === myId);
  const newEmail = user.find((user) => user.email === req.body.email && user.id !== myId)
  if(!newEmail){
    users[user] = req.body;
    return res.send("change save");
  }
  res.send("the email address already in use")

});
app.delete("/:id", (req, res) => {
  let myId = req.params.id;
  const user = users.findIndex((user) => user.id === myId);
  users.splice(user, 1);
  res.send("user delete");
});
app.post("/check",async (req, res) => {
  let newUser = req.body
  let user = users.find((user) => user.email === newUser.email)
  if(!user) {return res.send("the email address not exist")}
  const match = await bcrypt.compare(newUser.password,user.password)
  if(match){
    return res.send('user exist')
  }
  res.send("not exist");
});
