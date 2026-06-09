import db from "../../config/connection.db.js";
import type { CreateProjectDto, UpdateProjectDto } from "./projects.dto.js";

class ProjectRepository{
    async CreateProject(project:CreateProjectDto){
        const result= await db.query("insert into projects(title_project, description_project,tools_project, likes_project) values ($1,$2,$3,$4) returning title_project, description_project,tools_project, likes_project;")
        return result
    }
    async GetAllProjects(){
        const result= await db.query("select * from projects;")
        return result 
    }
       async UpdateProject(project:UpdateProjectDto){
        const result= await db.query("update projects set title_project =$1, description_project=$2, tools_project=$3 where code_projects=$4 returning title_project,description_project ,tools_project;",[project.title_project, project.description_project,project.tools_project, project.code_project])
        return result 
    }   
    async DeleteProject(code_project:string){
        const result= await db.query("delete from project where code_project=$1 returning code_project;",[code_project]);
        return result 
    }
  async UpdateStarsProject(code_project:string){
        const result= await db.query("update projects set likes_project=likes_project + 1 where code_project=$1 returning likes_project;",[code_project])
        return result 
    }
}

const projectRepository=new ProjectRepository()
export default projectRepository;