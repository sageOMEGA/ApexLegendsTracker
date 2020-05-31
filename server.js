const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
// const cors = require("cors");

//Load ENV
dotenv.config({ path: "./config.env" });

//Create React App
const app = express();

// CORS
// app.use(cors());

//Dev Loging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Profile Routes
app.use("/api/v2/profile", require("./routes/profile"));

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`Server Running On Port ${port}...`);
});
