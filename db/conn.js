const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Week_6_task")
  .then(() => console.log("server was connected"))
  .catch(() => console.log("server not connected"));
