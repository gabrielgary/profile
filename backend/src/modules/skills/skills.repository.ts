import db from "../../config/connection.db.js";
import type { CreateDtoSkill, UpdateDtoSkill } from "./skills.dto.js";

class SkillsRepository {
  async CreateSkill(skill: CreateDtoSkill) {
    const { rows } = await db.query(
      "insert into skills (title_skill,percentual_experience,code_category_skill) values($1,$2,$3) returning *;",
      [
        skill.title_skill,
        skill.percentual_experience,
        skill.code_category_skill,
      ],
    );
    return rows;
  }

  // update
  async UpdateSkill(skill: UpdateDtoSkill) {
    const { rows } = await db.query(
      "update skill set title_skill=$1, percentual_experience=$2, code_category_skill=$3 where code_skill=$4 returning *;",
      [
        skill.title_skill,
        skill.percentual_experience,
        skill.code_category_skill,
        skill.code_skill,
      ],
    );
    return rows;
  }
  // delete
  async DeleteSkill(code_skill: string) {
    const { rows } = await db.query(
      "delete from skills where code_skill=$1 returning *;",
      [code_skill],
    );
    return rows;
  }
  // get
  async ReadSkill(skill: UpdateDtoSkill) {
    const { rows } = await db.query(
      "select skills.code_skill,skills.title_skill,skills.percentual_experience, categorySkill.category_skill as 'category' from skills join categorySkill on categorySkill.code_category_skill=skills.code_category_skill;",
      [skill.title_skill, skill.percentual_experience, skill.code_skill],
    );
    return rows;
  }
  async ReadBySkill(title_skill: string) {
    const { rows } = await db.query(
      "select * from skills where title_skill=$1;",
      [title_skill],
    );
    return rows;
  }
}
const skillRepository: SkillsRepository = new SkillsRepository();
export default skillRepository;
