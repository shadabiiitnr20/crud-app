require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/product");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200,
};

//add corsOptions
app.use(cors(corsOptions));
app.use("/api/products", productRoute);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  // throw new Error("Fake Error");
  res.send("Hello User");
});

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
  // console.log("DB connected");
  app.listen(PORT, () => {
    // console.log(`App is running on port: ${PORT}`);
  });
}
