import mongoose from 'mongoose';

const MONGOOSE_URI = "mongodb+srv://alsaba:alsaba@alsaba.xwuo0ys.mongodb.net/?retryWrites=true&w=majority"

export const ConnectToDatabase = async () => {
    try {
        await mongoose.connect(MONGOOSE_URI)
        console.log("connection reussie à mongo DB : ");
    } catch (error) {
        console.error("erreure de connection")
    }
}