import { hashPassword } from "../../../lib/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 7 characters long.",
    });
    return;
  }

  await dbConnect();

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({
    ...req.body,
    role: "user",
    password: hashedPassword,
  });

  res.status(201).json({ message: "success" });
}

export default handler;
