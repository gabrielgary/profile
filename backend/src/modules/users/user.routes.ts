
import express from 'express'
import type {Request, Response} from 'express'
import userController from './user.controllers.js';
const router=express.Router()

router.post("/",userController.CreateUser)
router.get("/:email_user",userController.GetUserData)
export default router;