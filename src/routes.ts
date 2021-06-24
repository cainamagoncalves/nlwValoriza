import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserContoller"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureADmin"

const router = Router()

const createUserControler = new CreateUserController()
const createTagControler = new CreateTagController()

router.post("/users", createUserControler.handle)
router.post("/tags", ensureAdmin, createTagControler.handle)

export { router }