import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "5d" });
};
const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password" });
    } else {
      const token = createToken(user._id);
      res
        .status(200)
        .json({ success: true, id: user._id, email: user.email, token });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const signupUser = async (req, res) => {
  const { name, surname, age, email, password, location } = req.body;

  if (!name || !surname || !age || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }

  try {
    const user = await User.create({
      name,
      surname,
      age,
      email,
      location,
      password: await hashedPassword(password),
    });
    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    } else if (!exists) {
      const token = createToken(user._id);
      res
        .status(200)
        .json({ success: true, id: user._id, email: user.email, token });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getUserProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
const logOutUser = async (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};
export default {
  loginUser,
  signupUser,
  getUserProfile,
  logOutUser,
};
