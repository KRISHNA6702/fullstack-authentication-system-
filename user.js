import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/authtestapp");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

export default mongoose.model("User", userSchema);
