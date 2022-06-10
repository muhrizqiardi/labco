import dbConnect from "../../../lib/dbConnect";
import GuestBook from "../../../models/GuestBook";
import { getSession } from "next-auth/react";
import getRole from "../../../lib/getRole";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      /* Scope: Admin */
      try {
        const agenda = await GuestBook.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "POST":
      /* Scope: Admin */
      try {
        if (session && await getRole(session.user.email) === "admin") {
          /* create a new model in the database */
          const agenda = await GuestBook.create(req.body);
          res.status(201).json({ success: true, data: agenda });
        } else {
          res.status(405).send({
            error:
              "Method not allowed. You must be logged in to create a new guest book.",
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
