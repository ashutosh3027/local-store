const express = require("express");
const morgan = require("morgan");
const userRouter = require('./routes/userRoutes');
const app = express();
console.log(process.env.NODE_ENV); // for develeopment purpose only;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // log details of request
}
app.use(express.json()); // . It parses incoming requests with JSON payloads and is based on body-parser.

app.use('/api/v1/users', userRouter);

module.exports = app;
