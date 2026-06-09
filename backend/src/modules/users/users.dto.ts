import type { UserEntity } from "./user.entity.js";

export type CreateDtoUsers=Pick<UserEntity, "email_user"|"password_user"|"name_user">

export type UpdateDtoUser=Partial<Omit<UserEntity,"password_user">>
export type GetDataDtoUser=Required<Omit<UserEntity,"password_user">>
