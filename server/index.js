const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const config = require("./config/dev");

const productRoutes = require("./routes/products");
const manageRoutes = require("./routes/manageProducts");
const userRoutes = require("./routes/users");
const productCategoryRoutes = require("./routes/productCategories");
const cartItems = require("./routes/cartItems");
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

// Routes
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartItems);
app.use("/api/v1/manage", manageRoutes);
app.use("/api/v1/product-categories", productCategoryRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
