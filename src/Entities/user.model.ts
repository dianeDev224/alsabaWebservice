import {
    Document,
    model,
    Schema,
} from 'mongoose';

export interface User extends Document {

    email: String,
    firstName: String,
    lastName: String,
    telephone: String,
    address: String,
}


const UserSchema = new Schema<User>({
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    telephone: { type: String },
    address: { type: String }
})

export const UserModel = model<User>("User", UserSchema);

