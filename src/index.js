const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(express.urlencoded());
const AppError = require("./ErrorController/appError");
const userRouter = require("./route");
const globalErrorHandler=require('./ErrorController/globalError');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

//Handling base route
app.use("", userRouter);

// Handling unexpcted routes
app.all("*", (req, res, next) => {
  next( new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler.globalError);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("App is running on port number ", port);
});


// module.exports = app;