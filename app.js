const express = require("express");

const app = express();
app.use(express.static("public"));

app.route("/").get((req, res) => {
  res.sendFile("index.html");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
