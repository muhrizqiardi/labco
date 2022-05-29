import dbConnect from "../../../lib/dbConnect";
import Agenda from "../../../models/Agenda";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const agenda = await Agenda.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const agenda = await Agenda.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: pet });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
