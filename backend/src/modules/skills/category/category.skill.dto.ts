import type CategorySkill from "./category.skill.entity.js";

export type CreateCategorySkillDto= Omit<CategorySkill,"code_category_skill">;
export type UpdateCategorySkillDto= CategorySkill;
