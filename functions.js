// module.exports = myFunction;
// const jsonfile = require("jsonfile");
// function allUsers(data) {
//   let resolute = "";
//   for (let x of data) {
//     resolute += x.id + " " + x.email + " " + x.password + "\n";
//   }
//   return resolute;
// }

// const readAndWrite = async function (file, newData) {
//   jsonfile.readFile(file, (data) => {
//     for (const user of data) {
//       if (user.email === newData.email) {
//         return res.send("the email address already in use");
//       }
//     }
//     if (!validator.validate(newData.email)) {
//       return res.send("email not valid");
//     }
//     data.push(newData);
//     jsonfile.writeFile(file, data);
//   });
// };

// app.post("/",async (req, res) => {
//     let newUser = req.body;
//     jsonfile.readFile('data.json')
//       .then((users) => {
  
//       })
//     for (const user of users) {
//       if (user.email === newUser.email) {
//         return res.send("the email address already in use");
//       }
//     }
//     if(!validator.validate(newUser.email)){
//       return res.send('email not valid')
//     }
//     const newPassword = await bcrypt.hash(req.body.password,8);
//     newUser.id = uuidv4();
//     newUser.password = newPassword
//     users.push(newUser);
//     res.send("user save");
//   });
  