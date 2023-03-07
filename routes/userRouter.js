var express = require("express");
const userController = require("../controllers/userController");
var userRouter = express.Router();
const bodyParser = require("body-parser");
userRouter.use(bodyParser.json());
/* GET users listing. */
userRouter.route("/").get(userController.index).post(userController.regist);
userRouter.route("/login").get(userController.login);
// router.use(bodyParser.json());

module.exports = userRouter;
