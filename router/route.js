import { Router } from "express";
const router = Router();

// import all controllers
import * as controller from '../controllers/appController.js';
import Auth, {localVariables} from "../middleware/auth.js";
import {registerMail} from "../controllers/mailer.js"

// Post Methods
router.route('/register').post(controller.register) // register user
router.route('/registerMail').post(registerMail);
router.route('/authenticate').post((req, res) =>res.end());
router.route('/login').post(controller.verifyUser, controller.login);

// Get Methods

router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.verifyUser,localVariables,controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);


//PUT Methods
router.route('/updateuser').put(Auth, controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);

export default router;