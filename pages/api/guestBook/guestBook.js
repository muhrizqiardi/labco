import dbConnect from '../../../middleware/dbConnect';
import GuestBook from '../../../models/GuestBook';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const guestBook = await guestBook.find({});

                res.status(200).json({ success: true, data: guestBook })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const guestBook = await guestBook.create(req.body);

                res.status(201).json({ success: true, data: guestBook })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}