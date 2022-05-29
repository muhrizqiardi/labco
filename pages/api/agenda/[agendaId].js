import dbConnect from "../../../lib/dbConnect";
import Agenda from "../../../models/Agenda";

export default async function handler(req, res) {
  const {
    query: { agendaId },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const agenda = await Agenda.findById(agendaId);
        if (!agenda) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: agenda });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const agenda = await Agenda.findByIdAndUpdate(id, req.body, {
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
        const deletedAgenda = await Agenda.deleteOne({ _id: agendaId });
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
