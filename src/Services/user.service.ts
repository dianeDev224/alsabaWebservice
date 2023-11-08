import { UserModel } from '../Entities/user.model';

export class UserServices {

    async register() {

        const newUser = new UserModel({
            email: "dianeoumar197@gmail.com",
            firstName: "oumar",
            lastName: "diane",
            telephone: "+212648529316",
            address: "petit simbaya"
        });

        await newUser.save();

    }
}