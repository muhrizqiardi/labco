import GuestBook from "../../../models/GuestBook";
import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    /* Get guest book list */
    /* Scope: Guest, User, Admin */
    case "GET":
      try {
        const guestBook = await GuestBook.find(
          {}
        ).sort("-createdAt"); /* find all the data in our database */
        res.status(200).json({ success: true, data: guestBook });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    /* Add item to guest book */
    /* Scope: User, Admin */
    case "POST":
      try {
        if (session) {
          /* create a new model in the database */
          const agenda = await GuestBook.create({
            ...req.body,
            user: session.user.email,
          });
          res.status(201).json({ success: true, data: agenda });
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
