import type { ResponseAPIType } from "../../utils/utils.types.js";
import type { CreateDtoSkill, UpdateDtoSkill } from "./skills.dto.js";
import skillRepository from "./skills.repository.js";
class SkillsService {
  async CreateSkill(skill: CreateDtoSkill): Promise<ResponseAPIType<Object>> {
    // verify if exists
    const is_registed = await skillRepository.ReadBySkill(skill.title_skill);
    if (is_registed.length > 1) {
      return {
        code_status: 203,
        sucess:false,
        data:is_registed,
        message:"Skill always exists!"
      }
    } else {
      const result=await skillRepository.CreateSkill(skill)
      return{
        code_status:201,
        sucess:true,
        data:result,
        message:"skill created successfull!"
      }
    }

  
  }
  async UpdateSkill(skill: UpdateDtoSkill) {
    
  }
  async DeleteSkill(skill: UpdateDtoSkill) {}
  async ReadSkill(skill: UpdateDtoSkill) {}
}
