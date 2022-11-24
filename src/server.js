const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(process.cwd() + "/frontend/build"));
app.use(express.json());

app.get("/api/pics", (_req, res) => {
  res.json([1, 2, 3, 4, 5, 6]);
});

app.get("*", (_req, res) => {
  res.sendFile(process.cwd() + "/frontend/build/index.html");
});

app.listen(process.env.PORT | 8080, () => {
  console.log(
    "Server Running at port : " + (process.env.PORT ? process.env.PORT : 8080)
  );
});
