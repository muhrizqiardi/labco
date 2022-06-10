import dbConnect from "../../../lib/dbConnect";
import getRole from "../../../lib/getRole";
import News from "../../../models/News";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const {
    query: { newsSlug },
    method,
  } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const newsData = await News.findOne({ slug: newsSlug });
        console.log;
        if (!newsData) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: newsData });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        if (!session || session.user.role !== "admin") throw "Not Allowed";
        const editedNews = await News.findOneAndUpdate(
          {
            slug: newsSlug,
          },
          {
            ...req.body,
          }
        );
        if (!editedNews) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: editedNews });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        if (!session || session.user.role !== "admin") throw "Not Allowed";
        const deletedNews = await News.deleteOne({ slug: newsSlug });
        if (!deletedNews) {
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
