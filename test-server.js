const express = require("express");
const app = express();
const port = 4040;

app.get("/api/test", (req, res) => {
  console.log("network was called");
  res.send("Hello, BRO!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
