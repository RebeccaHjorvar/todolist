const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  
  var weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  for (let i = 0; i < weekdays.length+1; i++) {

    if(currentDay === i){
      day = weekdays[i]; 
  }
}
  res.render("list", { kindOfDay: day })
  
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
