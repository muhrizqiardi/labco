import Item from "../../../models/Item" // mengimpor objek Items

// Menerima request pada path /api/items/:itemId
export default function handler(req, res) {
  // Memproses GET request
  // Untuk meng-list semua item pada inventory
  if (req.method === "GET") {
    // Mendapatkan variabel itemId dari path
    const { itemId } = req.query; 
    // Cari di database berdasarkan variabel itemId
    Item.findById(itemId, function (err, item) {
      // Jika error, akan merespon dengan kode 400
      if (err) res.status(400);
      // Jika tidak error akan merespon dengan kode 200 (OK) beserta objeknya
      res.status(200).json(item);
    })

  // Memproses DELETE request
  // Untuk membuat item baru
  } else if (req.method === "DELETE") {
    // Mendapatkan variabel itemId dari path
    const { itemId } = req.query; 
    // Cari di database berdasarkan variabel itemId kemudian dihapus
    Item.findByIdAndRemove(itemId, function (err, item) {
      // Jika error, akan merespon dengan kode 500
      if (err) res.status(500);
      // Jika tidak error akan merespon dengan kode 200 (OK) dan object yg ditentukan
      res.status(200).json({ _id: itemId, message: "deleted" });
    })
  }
}
