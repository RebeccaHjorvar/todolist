const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  var today = new Date();
  today.getDay;
  if (today.getDay() === 0 || today.getDay === 7) {
    res.send("Yay! It's the weekend");
  } else {
    res.send("Boo! I have to work ");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
