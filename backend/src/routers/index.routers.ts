import UserRoutes from '../modules/users/user.routes.js'
import express from 'express'

const router=express.Router()
router.use("/users",UserRoutes)
router.use("/hearth",(req,res)=>{
    res.status(200).json({
        status:req.statusCode,
        message:req.statusMessage
    })
})



export default router