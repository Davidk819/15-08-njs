const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const allUsers = require("./functions");

const users = [
  { id: 1, email: "user1@example.com", password: "password123" },
  { id: 2, email: "user2@example.com", password: "securepass" },
  { id: 3, email: "user3@example.com", password: "12345" },
];

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
app.use(bodyParser.json());
app.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json(users[id - 1].email + users[id - 1].password);
});
app.get("/", (req, res) => {
  let id = req.params.id;
  let b = allUsers(users);
  res.send(b);
});
app.post("/", (req, res) => {
  let newUser = req.body
  for (const user of users) {
    if (user.email === newUser.email || user.password === newUser.password) {
      return res.send("the email address or the password already token")
    }
  }
  newUser.id = uuidv4();
  users.push(req.body);
  res.send(allUsers(users));
});

app.put("/:id", (req, res) => {
  let myId = req.body.id;
  const user = users.findIndex((user) => user.id === myId);
  users[user] = req.body;
  res.send("change save");
});
app.delete("/:id", (req, res) => {
  let myId = parseInt(req.params.id);
  const user = users.findIndex((user) => user.id === myId);
  users.splice(user, 1);
  res.send("user delete");
});
// app.post("/", (req, res) => {
//   let newUser = req.body
//   for (const user of users) {
//     if (user.email === newUser.email || user.password === newUser.password) {
//       return res.send("the email address or the password are taken")
//     }
//   }
//   res.send("not exist");
// });