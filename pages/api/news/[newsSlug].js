import dbConnect from "../../../lib/dbConnect";
import getRole from "../../../lib/getRole";
import News from "../../../models/News";

export default async function handler(req, res) {
  const {
    query: { newsSlug },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const newsData = await News.findOne({ slug: newsSlug });
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
        if (!session || (await getRole(session.email)) !== "admin")
          throw "Not Allowed";
        const editedNews = await News.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!editedNews) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: editedNews });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        if (!session || (await getRole(session.email)) !== "admin")
          throw "Not Allowed";
        const deletedNews = await News.deleteOne({ _id: id });
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
