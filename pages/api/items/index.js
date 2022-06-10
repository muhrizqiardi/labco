// create an handler for get inventory item list, and post inventory item
import dbConnect from "../../../lib/dbConnect";
import Item from "../../../models/Item";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    // get inventory item detail from mongoose model Item
    case "GET":
      try {
        // throw error if user isn't an admin
        if (session.user.role !== "admin") throw "Not allowed";
        const items = await Item.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
      }
      break;

    // post inventory item to mongoose model Item
    case "POST":
      try {
        if (session && session.user.role === "admin") {
          /* create a new model in the database */
          const item = await Item.create(req.body);
          res.status(201).json({ success: true, data: item });
        } else {
          res.status(405).send({
            error: "Method not allowed",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
