import User from "../models/User";

export default async function getRole(email) {
  await dbConnect();

  let role;

  try {
    const user = await User.findOne({ email });
    role = user?.role;
  } catch (error) {
    return false;
  }

  return role;
}
