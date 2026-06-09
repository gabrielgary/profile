import type { ResponseAPIType } from "../../../utils/utils.types.js";
import type {
  CreateCategorySkillDto,
  UpdateCategorySkillDto,
} from "./category.skill.dto.js";
import categoryskillRepository from "./category.skill.repository.js";
import type CategorySkill from "./category.skill.entity.js";
class CategorySkillService {
  async CreateCategorySkill(
    cateogry: CreateCategorySkillDto,
  ): Promise<ResponseAPIType<Object>> {
    // verify category
    const is_registed = await categoryskillRepository.ReadByCategory(
      cateogry.category_skill,
    );
    if (is_registed.length > 1) {
      return {
        code_status: 202,
        data: is_registed[0],
        message: "This category always exists",
        sucess: false,
      };
    } else {
      const result =
        await categoryskillRepository.CreateCategorySkill(cateogry);
      return {
        code_status: 201,
        data: result[0],
        message: "Category created with success!",
        sucess: true,
      };
    }
  }
  // update
  async UpdateCategorySkill(
    category: UpdateCategorySkillDto,
  ): Promise<ResponseAPIType<Object>> {
    // verify if exists
    // update datas
    const is_registed = await categoryskillRepository.ReadByCategory(
      category.category_skill,
    );
    if (is_registed.length > 1) {
      const result =
        await categoryskillRepository.UpdateCategorySkill(category);

      return {
        code_status: 202,
        data: result[0],
        message: "Category updated successfull",
        sucess: true,
      };
    } else {
      return {
        code_status: 204,
        data: is_registed[0],
        message: "This category isn´t exists",
        sucess: false,
      };
    }
  }
  // read

  async ReadCategorySkill(): Promise<ResponseAPIType<Array<CategorySkill>>> {
    try {
      const result = await categoryskillRepository.ReadCategorySkill();
      return {
        code_status: 200,
        message: "category list",
        data: result,
        sucess: true,
      };
    } catch (error) {
      console.log(error);

      return {
        code_status: 205,
        message: "Failed to list category",
        data: [],
        sucess: false,
      };
    }
  }
  // delete
  async DeleteCategorySkill(
    code_category_skill: string,
  ): Promise<ResponseAPIType<Object>> {
    const is_registed =
      await categoryskillRepository.ReadByCodeCategory(code_category_skill);
    if (is_registed.length > 1) {
      const result =
        await categoryskillRepository.DeleteCategorySkill(code_category_skill);
      return {
        code_status: 204,
        data: result,
        message: "data deleted successfull",
        sucess: true,
      };
    } else {
      return {
        code_status: 204,
        data: {},
        message: "not found data",
        sucess: false,
      };
    }
  }
  // read one
  async ReadByCategory(category: string): Promise<ResponseAPIType<Object>> {
    const result= await categoryskillRepository.ReadByCategory(category)
    if (result.length>1) {
        return {
        code_status: 200,
        data: result[0],
        message: "Category found !",
        sucess: true,
      };
    }else{
         return {
        code_status: 204,
        data: result[0],
        message: "This category isn´t exists",
        sucess: false,
      };
    }
  }
}
const categorySkillService=new CategorySkillService();
export default categorySkillService;