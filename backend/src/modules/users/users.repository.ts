import db from "../../config/connection.db.js";
import type { CreateDtoUsers } from "./users.dto.js";

 class UsersRepository {
  // create user
  public async CreateUser(user_data: CreateDtoUsers) {
    const { rows } = await db.query(
      "insert into users(name_user, email_user, password_user) values($1,$2,$3) returning name_user, code_user, email_user;",
      [user_data.name_user, user_data.email_user, user_data.password_user],
    );
    return rows[0]
  }
  // update data user
  public async UpdateUser() {}
  // get data user safe
  public async GetUserData(email: string) {
    const { rows } = await db.query(
      "select code_user, name_user,email_user, title_job_user, description_user, profile_user, social_user from users where email_user=$1;",
      [email],
    );
    return rows[0];
  }
}
const userRepository:UsersRepository=new UsersRepository()
export default userRepository;