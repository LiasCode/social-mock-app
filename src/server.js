const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static(process.cwd() + "/public"));
app.use(express.json());

app.get("/api/pics", (req, res) => {
  res.json([1, 2, 3, 4, 5, 6]);
});

app.get("*", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.listen(process.env.PORT | 8080, () => {
  console.log(
    "Server Running at port : " + (process.env.PORT ? process.env.PORT : 8080)
  );
});
