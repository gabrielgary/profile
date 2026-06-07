
import express from "express"
import projectControllers from "./projects.controllers.js";
const router=express.Router()
router.post("/",projectControllers.CreateProject)
router.get("/", projectControllers.GetAllProjects)
router.patch("/:code_project",projectControllers.UpdateProject)
router.patch("/stars/:code_project",projectControllers.UpdateStarsProject)
router.delete("/",projectControllers.DeleteProject)

export default router