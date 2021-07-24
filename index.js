require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
require("./db/mongoose");

const userRouter = require("./routers/user");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
