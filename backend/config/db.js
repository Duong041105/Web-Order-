import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://greatstack:041105@cluster0.jqu9n.mongodb.net/food-delivery')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}