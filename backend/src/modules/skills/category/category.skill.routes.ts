import express from 'express'
import categorySkillController from './category.skill.controllers.js';
const router=express.Router();


router.get("",categorySkillController.ReadCategorySkill);
router.get("\?category",categorySkillController.ReadByCategory);
router.post("",categorySkillController.CreateCategorySkill)
router.delete("\:code_category_skill",categorySkillController.DeleteCategorySkill)
router.patch("\:code_category_skill",categorySkillController.UpdateCategorySkill)
export default router;