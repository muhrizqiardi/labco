import dbConnect from "../../../lib/dbConnect";
import News from "../../../models/News";
import { getSession } from "next-auth/react";
import _ from "lodash";
import moment from "moment";

export default async function handler(req, res) {
  const { method } = req;
  const session = await getSession({ req });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const beritas = await News.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: beritas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        if (!session || session?.user.role !== "admin") throw "Not Allowed";
        console.log({
          ...req.body,
          slug: _.kebabCase(req.body.title),
        });
        const news = await News.create({
          ...req.body,
          slug:
            moment().format("YYYY-MM-DD-hh-mm-ss") +
            "-" +
            _.kebabCase(req.body.title),
          author: session?.user.email,
        }); /* create a new model in the database */
        res.status(201).json({ success: true, data: news });
      } catch (error) {
        console.log({ error });
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
