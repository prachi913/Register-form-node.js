const express = require("express");
const cors = require("cors");

const { connection } = require("./db");
const { userrouter } = require("./route/userroute");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userrouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("all ok");
  } catch (error) {
    console.log(error);
  }
  console.log("Port 8080 is running");
});