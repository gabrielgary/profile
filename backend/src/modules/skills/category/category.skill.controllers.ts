import type { Request, Response } from "express";
import categorySkillService from "./category.skill.service.js";

class CategorySkillController {
  async CreateCategorySkill(request: Request, response: Response) {
    const { category_skill } = request.body;
    const result = await categorySkillService.CreateCategorySkill({
      category_skill: category_skill,
    });
    response.status(result.code_status).json({
      response: result,
    });
  }
  // update
  async UpdateCategorySkill(request: Request, response: Response) {
    let { code_category_skill } = request.params;
    code_category_skill = code_category_skill.toString();
    const { category_skill } = request.body;
    const result = await categorySkillService.UpdateCategorySkill({
      category_skill: category_skill,
      code_category_skill: code_category_skill,
    });
    response.status(result.code_status).json({
      response: result,
    });
  }
  // read

  async ReadCategorySkill(request: Request, response: Response) {
    const result = await categorySkillService.ReadCategorySkill();
    response.status(result.code_status).json({
      response: result,
    });
  }
  // delete
  async DeleteCategorySkill(request: Request, response: Response) {
    let { code_category_skill } = request.params;
    code_category_skill = code_category_skill.toString();
    const result =
      await categorySkillService.DeleteCategorySkill(code_category_skill);
    response.status(result.code_status).json({
      response: result,
    });
  }
  // read one
  async ReadByCategory(request: Request, response: Response) {
    let {category}=request.query
    category=category?.toString();
    const result=await categorySkillService.ReadByCategory(category)
    response.status(result.code_status).json({
      response: result,
    });
  }
}
const categorySkillController=new CategorySkillController()
export default categorySkillController;