import type { ResponseAPIType } from "../../utils/utils.types.js";
import type {
  CreateProjectDto,
  GetProjectDto,
  UpdateProjectDto,
} from "./projects.dto.js";
import projectRepository from "./projects.repository.js";

class ProjectService {
  async CreateProject(
    project: CreateProjectDto,
  ): Promise<ResponseAPIType<CreateProjectDto>> {
    try {
      const { rows } = await projectRepository.CreateProject(project);
      return {
        code_status: 201,
        data: rows[0],
        message: "project create successfully",
        sucess: true,
      };
    } catch (error) {
      return {
        code_status: 204,
        data: {
          description_project: "not found",
          likes_project: 0,
          title_project: "not found",
          tools_project: {},
        },
        message: "project create failed\n Error: " + error.message,
        sucess: false,
      };
    }
  }
  async GetAllProjects(): Promise<ResponseAPIType<Array<GetProjectDto>>> {
    console.log("fdsfsdfs");
    
    try {
      const { rows } = await projectRepository.GetAllProjects();
      return {
        code_status: 200,
        data: rows,
        message: "all projects returning",
        sucess: true,
      };
    } catch (error) {
      return {
        code_status: 204,
        data: [],
        message: "not found content\n Error" + error.message,
        sucess: false,
      };
    }
  }
  async UpdateProject(
    project: UpdateProjectDto,
  ): Promise<ResponseAPIType<UpdateProjectDto>> {
    try {
      const { rows } = await projectRepository.UpdateProject(project);
      return {
        code_status: 205,
        data: rows[0],
        message: "project updated successfull!",
        sucess: true,
      };
    } catch (error) {
      return {
        code_status: 203,
        data: {},
        message: "project updated failed!",
        sucess: false,
      };
    }
  }
  async DeleteProject(code_project: string): Promise<ResponseAPIType<string>> {
    const { rows } = await projectRepository.DeleteProject(code_project);
    return {
      code_status: 201,
      data: rows[0],
      message: "project moved!",
      sucess: true,
    };
  }
  async UpdateStarsProject(code_project: string):Promise<ResponseAPIType<number>> {
     const { rows } = await projectRepository.UpdateStarsProject(code_project);
    return {
      code_status: 201,
      data: rows[0],
      message: " thanks for your like!",
      sucess: true,
    };
  }
  }


const projectService = new ProjectService();
export default projectService