import type { CreateDtoUsers, GetDataDtoUser } from "./users.dto.js";
import userRepository from "./users.repository.js";
import type { ResponseAPIType } from "../../utils/utils.types.js";
import bcrypt from "bcrypt";
class UsersServices {
  public async CreateUser(
    User_Data: CreateDtoUsers,
  ): Promise<ResponseAPIType<CreateDtoUsers>> {
    // verficar se usuario existe
    const user_exists = await userRepository.GetUserData(User_Data.email_user);
    if (user_exists) {
      return {
        // redicionar para o login e não mandar messagem de usuario já existe
        code_status: 201,
        data: User_Data,
        message: "",
        sucess: true,
      };
    }
    // criptografiar
    const saltRound = 12;
    const password_hash_user = await bcrypt.hash(
      User_Data.password_user,
      saltRound,
    );
    //criar
    const result = await userRepository.CreateUser({
      email_user: User_Data.email_user,
      name_user: User_Data.name_user,
      password_user: password_hash_user,
    });

    //mandar email
    //
    return {
      code_status: 201,
      data: result,
      message: "create successifull",
      sucess: true,
    };
  }
  public async GetUserDAta(
    email: string,
  ): Promise<ResponseAPIType<GetDataDtoUser>> {
    const result = await userRepository.GetUserData(email);
    if (result) {
      return {
        code_status: 200,
        data: result,
        message: "user data found",
        sucess: true,
      };
    } else {
      return {
        code_status: 204,
        data: result,
        message: "user data not found",
        sucess: false,
      };
    }
  }
}
const userServices=new UsersServices();
export default userServices;