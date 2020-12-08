const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config/dev");

const productRoutes = require("./routes/products");
const { provideErrorHandler } = require("./middlewares/index");

const app = express();

const PORT = process.env.PORT || 3005;

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to DB");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(provideErrorHandler);

app.use("/api/v1/products", productRoutes);

app.listen(PORT, () => {
  console.log("Server is listening at port:", PORT);
});
