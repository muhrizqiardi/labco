import Item from "../../../models/Item"; // mengimpor objek Items

// Menerima request pada path /api/items
export default function handler(req, res) {
  // Memproses GET request
  // Untuk meng-list semua item/barang inventaris dari database
  if (req.method === "GET") {
    Item.find({}, function (err, item) {
      // Jika error, akan merespon dengan kode 400
      if (err) res.status(400);
      // Jika tidak error akan merespon dengan kode 200 (OK) beserta objeknya
      res.status(200).json(item);
    });

    // Memproses POST request
    // Untuk menambahkan item/barang inventaris dari database
  } else if (req.method === "POST") {
    Item.create(req.body, function (err, item) {
      // Jika error, akan merespon dengan kode 500 (internal error)
      if (err) res.status(500);
      // Jika tidak error akan merespon dengan kode 200 (OK) beserta objeknya
      res.status(200).json(item);
    });
  }
}
