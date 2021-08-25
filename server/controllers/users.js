import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserModel from "../models/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "user does not exist" });

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword)
      return res.status(400).json({ message: "invalid credentials" });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        profile: { _id: user._id, email: user.email, givenName: user.name },
        token: token,
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const isExisting = await UserModel.findOne({ email });

    if (isExisting)
      return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ message: "Password and confirm password do not match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res
      .status(200)
      .cookie("token, token, {httpOnly: true")
      .json({
        profile: { _id: user._id, email: user.email, givenName: user.name },
        token: token,
      });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
