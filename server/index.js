const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");

const app = express();

const PORT = process.env.PORT || 3005;

// Middleware
app.use(bodyParser.json());

app.use("/api/v1/products", productRoutes);

app.listen(PORT, () => {
  console.log("Server is listening at port:", PORT);
});
