const express = require("express");
const dotenv = require("dotenv");
const MongoClient = require("./db/db.js");

const errorMiddleware = require("./global/middleware/errorMiddleware.js");

const products = require("./apis/product");
const users = require("./apis/users.js");

dotenv.config();
MongoClient();

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apis route
app.use("/api/products", products);
app.use("/api/users", users);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
