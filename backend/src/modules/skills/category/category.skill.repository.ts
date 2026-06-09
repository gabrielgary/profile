import db from "../../../config/connection.db.js";
import type { CreateCategorySkillDto, UpdateCategorySkillDto } from "./category.skill.dto.js";

class CategoryskillRepository{
    // create
    async CreateCategorySkill(cateogry:CreateCategorySkillDto){
        const {rows}=await db.query("insert into category(category_skill) values ($1) returning *;",[cateogry.category_skill]);
        return rows;
    }
    // update
    async UpdateCategorySkill(category:UpdateCategorySkillDto){
        const {rows}= await db.query("update categorySkill set category_skill=$1 where code_category_skill=$2 returning *; ",[category.category_skill,category.code_category_skill])
        return rows
    }
    // read
    async ReadCategorySkill(){
        const {rows}= await db.query("select * from categoryskill;");
        return rows;
    }
    // delete
    async DeleteCategorySkill(code_category_skill:string){
        const {rows}=await db.query("delete from categorySkill where code_category_skill=$1 retuning code_category_skill;",[code_category_skill]);
        return rows;


    }
    // read one
    async ReadByCategory(category:string)
    {
        const {rows}=await db.query("select * from category where category_skill=$1 ;",[category]);
        return rows
    }
       async ReadByCodeCategory(code_category_skill:string)
    {
        const {rows}=await db.query("select * from category where code_category_skill=$1 ;",[code_category_skill]);
        return rows
    }
}
const categoryskillRepository:CategoryskillRepository=new CategoryskillRepository()
export default categoryskillRepository;