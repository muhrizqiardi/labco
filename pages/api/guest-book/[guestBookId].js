// create route handler for get guest book detail, edit guest book, delete guest book

import dbConnect from "../../../lib/dbConnect";
import GuestBook from "../../../models/GuestBook";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const {
    query: { guestBookId },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const agenda = await GuestBook.findById(guestBookId);
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "PUT":
      // find one and update guest book item, scope: admin
      try {
        if (session && (await getRole(session.user.email))) {
          const agenda = await GuestBook.findByIdAndUpdate(
            guestBookId,
            req.body,
            { new: true }
          );
          res.status(200).json({ success: true, data: agenda });
        } else {
          res.status(405).send({
            error: "Method not allowed",
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "DELETE":
      // delete guest book item, scope: admin
      try {
        if (session && (await getRole(session.user.email))) {
          const agenda = await GuestBook.findByIdAndDelete(guestBookId);
          res.status(200).json({ success: true, data: agenda });
        } else {
          res.status(405).send({
            error: "Method not allowed",
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
  }
}
