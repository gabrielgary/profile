import type ProjectsEntity from "./projects.entity.js";

export type CreateProjectDto= Omit<ProjectsEntity,"code_project">
export type GetProjectDto= ProjectsEntity
export type UpdateProjectDto= Partial<ProjectsEntity>