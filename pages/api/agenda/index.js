import dbConnect from "../../../lib/dbConnect";
import Agenda from "../../../models/Agenda";
import moment from "moment";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (req.query.date) {
          const agenda = await Agenda.find({
            startTime: {
              $gte: moment.utc(req.query.date).utcOffset(0).startOf("day").toDate(),
              $lt: moment.utc(req.query.date).utcOffset(0).endOf("day").toDate(),
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
      try {
        const agenda = await Agenda.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: agenda });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
