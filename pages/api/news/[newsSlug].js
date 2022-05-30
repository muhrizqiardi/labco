import dbConnect from '../../../lib/dbConnect'
import News from '../../../models/News'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const beritas = await News.findById(id)
        if (!beritas) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: beritas })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const beritas = await News.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!beritas) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: beritas })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedNews = await News.deleteOne({ _id: id })
        if (!deletedNews) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}