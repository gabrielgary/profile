import type SkillsEntity from "./skills.entity.js";

export type CreateDtoSkill=Omit<SkillsEntity,"code_skill">
export type UpdateDtoSkill=Partial<SkillsEntity>