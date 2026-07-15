import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 90 },
  location: { type: String, required: false },
  email: {
    type: String,
    required: true,
    unique: true,
    match: new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$"),
  },
  password: { type: String, required: true, minlength: 6 },
});

const User = mongoose.model("User", userSchema);

export default User;
