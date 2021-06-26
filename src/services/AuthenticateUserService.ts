import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    const token = sign({
      email: user.email
    }, "8a5048c7526a0cd514e431fca26a979c", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }

}

export { AuthenticateUserService }