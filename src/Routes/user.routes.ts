import { Router } from 'express';

import { userController } from '../Controllers/user.controller';

const route = Router()

const newUserController = new userController()



route.get("/register", newUserController.registerUser)

export default route; 