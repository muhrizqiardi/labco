import dbConnect from "../../../lib/dbConnect";
import Item from "../../../models/Item";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const {
    query: { itemId },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    // get inventory item list from mongoose model Item
    case "GET":
      try {
        if (!session || session.user.role !== "admin")
          throw new Error("Unauthorized");
        const item = await Item.findById(
          itemId
        ); 
        
        console.log({item});/* find all the data in our database */
        res.status(200).json({ success: true, data: item });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error });
      }
      break;

    // post inventory item to mongoose model Item
    case "PUT":
      try {
        if (!session || session.user.role !== "admin") throw "Not Allowed";
        const editedItem = await Item.findByIdAndUpdate(itemId, {
          ...req.body,
        });
        if (!editedItem) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: editedItem });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        if (!session || session.user.role !== "admin") throw "Not Allowed";
        const deletedItem = await Item.deleteOne({ _id: itemId });
        if (!deletedItem) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
