import dbConnect from "../../../lib/dbConnect";
import Agenda from "../../../models/Agenda";
import { getSession } from "next-auth/react";
import getRole from "../../../lib/getRole";

export default async function handler(req, res) {
  const {
    query: { agendaId },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    /* Get agenda detail */
    /* Scope: Guest, User, Admin */
    case "GET":
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

    /* Edit agenda detail */
    /* Scope: Admin */
    case "PUT" /* Edit a model by its ID */:
      try {
        if (session && (await getRole(session.user.email))) {
          let agenda = await Agenda.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });
          if (!agenda) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: agenda });
        } else {
          throw "Not Allowed";
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    /* Delete agenda */
    /* Scope: Admin */
    case "DELETE" /* Delete a model by its ID */:
      try {
        if (session && (await getRole(session.user.email))) {
          const deletedAgenda = await Agenda.deleteOne({ _id: agendaId });
          if (!deletedAgenda) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } else {
          throw "Not Allowed";
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
