import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const {
    query: { userId },
    method,
  } = req;

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
        const agenda = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!agenda) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
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
