const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
  
});

app.post("/", (req,res) => {

  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.get("/work", (res, req) => {
  req.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", (res,req) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
