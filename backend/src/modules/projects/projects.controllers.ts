import type { Request, Response } from "express";
import projectService from "./projects.service.js";
import type { ResponseAPIType } from "../../utils/utils.types.js";

class ProjectControllers {
  async CreateProject(request: Request, response: Response) {
    const {
      title_project,
      description_prioject,
      likes_project,
      tools_project,
    } = request.body;

    const result = await projectService.CreateProject({
      title_project: title_project,
      description_project: description_prioject,
      likes_project: likes_project,
      tools_project: tools_project,
    });
    response.status(result.code_status).json({
      response: result,
    });
  }
  async GetAllProjects(request: Request, response: Response) {
    const result = await projectService.GetAllProjects();
    response.status(result.code_status).json({
      response: result,
    });
  }
  async UpdateProject(request: Request, response: Response) {
    const { code_project } = request.params;
    const code_project_string = code_project.toString();

    const {
      title_project,
      description_prioject,
      likes_project,
      tools_project,
    } = request.body;

    const result = await projectService.UpdateProject({
      title_project: title_project,
      description_project: description_prioject,
      likes_project: likes_project,
      tools_project: tools_project,
      code_project: code_project_string,
    });
    response.status(result.code_status).json({
      response: result,
    });
  }
  async UpdateStarsProject(request: Request, response: Response) {
    let { code_project } = request.params;
    code_project = code_project?.toString();
    const result = await projectService.UpdateStarsProject(code_project);
    response.status(result.code_status).json({
      response: result,
    });
  }
  async DeleteProject(request: Request, response: Response) {
    let { code_project } = request.params;
    code_project = code_project?.toString();
    const result = await projectService.DeleteProject(code_project);
    response.status(result.code_status).json({
      response: result,
    });
  }
}
const projectControllers = new ProjectControllers();
export default projectControllers;
