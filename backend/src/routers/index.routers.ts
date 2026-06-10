import express from 'express'
import UserRoutes from '../modules/users/user.routes.js'
import ProjectRoutes from '../modules/projects/projects.routes.js'
import CategorySkillRoutes from '../modules/skills/category/category.skill.routes.js'
const router=express.Router()
router.use("/users",UserRoutes)
router.use("/category-skill",CategorySkillRoutes)
router.use("/project",ProjectRoutes)
router.use("/hearth",(req,res)=>{
    res.status(200).json({
        status:req.statusCode,
        message:req.statusMessage
    })
})



export default router