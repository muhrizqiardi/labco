import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const {
    query: { userId },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    /* Scope:  */
    case "GET" /* Get a model by its ID */:
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        if (!session || session.user._id !== userId) {
          throw new Error("Unauthorized");
        }
        const agenda = await User.findByIdAndUpdate(userId, req.body, {
          new: true,
          runValidators: true,
        });
        console.log({ agenda });
        if (!agenda) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
        console.log({ error });
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedAgenda = await User.deleteOne({ _id: userId });
        if (!deletedAgenda) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
