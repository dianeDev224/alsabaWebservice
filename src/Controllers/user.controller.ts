import {
    Request,
    Response,
} from 'express';

import { UserServices } from '../Services/user.service';

export class userController {

    // dkdjsdks
    async registerUser(req: Request, res: Response): Promise<void> {
        try {
            await new UserServices().register();
            res.status(200).json({
                sucess: true,
                message: "hello oumar everything is done"
            });
        } catch (error) {
            console.error("error : ", error)
            res.status(500).json({
                succes: false,
                message: "it souns like something went wrong"
            })
        }
    }
}