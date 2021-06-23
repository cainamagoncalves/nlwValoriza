import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class USersRepositories extends Repository<User> {
  
}

export { USersRepositories }