import dbConnect from "../../../lib/dbConnect";
import Agenda from "../../../models/Agenda";
import moment from "moment";
import getRole from "../../../lib/getRole";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      /* Get agenda list based on a date */
      /* Scope: Guest, User, Admin */
      try {
        if (req.query.date) {
          const agenda = await Agenda.find({
            startTime: {
              $gte: moment
                .utc(req.query.date)
                .utcOffset(0)
                .startOf("day")
                .toDate(),
              $lt: moment
                .utc(req.query.date)
                .utcOffset(0)
                .endOf("day")
                .toDate(),
            },
          }).sort("startTime"); /* find all the data in our database */
          res.status(200).json({ success: true, data: agenda });
        } else {
          throw new Error("Please provide date parameter");
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "POST":
      /* Add new agenda */
      /* Scope: Admin */
      try {
        if ((await getRole(session.user.email)) === "admin") {
          const agenda = await Agenda.create(
            req.body
          ); /* create a new model in the database */
          res.status(201).json({ success: true, data: agenda });
        } else {
          throw "Not Allowed";
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
