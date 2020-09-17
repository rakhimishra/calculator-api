const express = require("express");
const userController = require("./controller");
const userRouter = express.Router();
//Handling base routes
userRouter
  .route("/")
  .get(userController.getfirstMessage);
  
//handling params routes
userRouter
  .route("/add").post(userController.addition);

  userRouter
  .route("/sub").post(userControlle.sub);
  userRouter
  .route("/multiply").post(userController.multiply);
  userRouter
  .route("/division").post(userController.division);
  
  
module.exports = userRouter;
