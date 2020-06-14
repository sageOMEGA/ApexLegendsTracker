const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

//Load ENV
dotenv.config({ path: "./config.env" });

//Create Express App
const app = express();

// CORS
app.use(cors());

//Dev Loging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Profile Routes
app.use("/api/v2/profile", require("./routes/profile"));

// Handle Prdction
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server Running On Port ${port}....`);
});
