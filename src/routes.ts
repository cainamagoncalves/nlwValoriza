import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserContoller"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentsController"

const router = Router()

const createUserControler = new CreateUserController()
const createTagControler = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserControler.handle)
router.post("/tags", ensureAdmin, createTagControler.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }