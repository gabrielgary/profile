
import express from 'express'
import type {Request, Response} from 'express'
import userController from './user.controllers.js';
import { authenticateUser } from '../../middleware/authenticate.middleware.js';
const router=express.Router()

router.post("/",userController.CreateUser)
router.get("/:email_user",authenticateUser,userController.GetUserData)
export default router;