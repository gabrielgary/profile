import type { Response, Request, NextFunction } from "express";
import type { ResponseAPIType } from "../../utils/utils.types.js";
import userServices from "./user.service.js";
import type { GetDataDtoUser } from "./users.dto.js";
class UserController {
  public async CreateUser(
    requeste: Request,
    response: Response,
  ): Promise<ResponseAPIType<GetDataDtoUser>> {
    const { email_user, password_user, name_user } = requeste.body;
    const result = await userServices.CreateUser({
      email_user: email_user,
      name_user: name_user,
      password_user: password_user,
    });
    if (result.sucess) {
      return {
        code_status: result.code_status,
        data: { email_user, name_user },
        message: "",
        sucess: true,
      };
    } else {
      return {
        code_status: result.code_status,
        data: { email_user, name_user },
        message: "",
        sucess: true,
      };
    }
  }
  public async GetUserData(
    request: Request,
    response: Response,
  ){ 
    const  {email_user}  = request.params;
    const email_user_string=email_user?.toString()
    const result = await userServices.GetUserDAta(email_user_string || "");
    if (result.sucess) {
      response.status(result.code_status).json(

        {
          code_status: result.code_status,
          data: result.data,
          message: "user data returning successfuly",
          sucess: false,
        }
      )
    } else {
      response.status(result.code_status).json( {
        code_status: result.code_status,
        data: {
          code_user: "not found",
          description_user: "not found",
          email_user: "not found",
          name_user: "not found",
          profile_user: "not found",
          social_user: "not found",
          title_job_user: "not found",
        },
        message: "user not fount",
        sucess: false,
      })
    }
  
  }
}

const userController = new UserController();
export default userController;
