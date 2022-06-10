# LABCO: Sistem Informasi Lab
- Nama: LABCO
- Teknologi yang digunakan dalam app ini:
	- Framework Next.js: framework yang menggabungkan bagian frontend yang menggunakan React dan bagian backend
	- JavaScript: bahasa pemrograman yang umumnya digunakan dalam web
	- MongoDB: database berbasis NoSQL (berarti tidak merupakan relational database seperti MySQL, PostgreSQL, dll, serta query-nya tidak menggunakan bahasa SQL)


# Menjalankan Aplikasi
Sebelumnya, pastikan terlebih dahulu Node.js, Node Package Manager, serta Yarn sudah terinstal. 

Setelah itu, pastikan dependency aplikasi sudah terinstall dengan menjalankan command berikut:

```
yarn install
```

Untuk menjalankan aplikasi dalam environment untuk development, buka command prompt, ganti direktori ke direktori project, dan jalankan command berikut:

```
yarn dev
```

Lalu buka https://localhost:3000 di browser. 

Untuk mendeploy serta menjalankannya dalam environment production, pertama lakukan proses *build* terlebih dahulu dengan menjalankan:

```
yarn build
```

Jika proses *build* sudah sukses, mulai servernya dengan menjalankan command:

```
yarn start
```

# REST API
![](/docs/assets/rest_api.svg)
- REST, akronim dari: **REpresentational State Transfer**
- Client: yang membuat **request** ke server
- Server: yang membuat **response** ke client
- **Request** terdiri dari: 
	- **Path**, seperti:
		- https://bebek.com/books
		- https://bebek.com/books?search=potong+bebek+angsa
		- https://bebek.com/books?sort=new&size=10
		- https://bebek.com/books/123
		- https://bebek.com/books/:bookId
		- https://bebek.com/books/123/page/1
		- https://bebek.com/books/:bookId/page/:pageId
	- **HTTP verbs**:
		- `GET` — retrieve a specific resource (by id) or a collection of resources
		- `POST` — create a new resource
		- `PUT` — update a specific resource (by id)
		- `DELETE` — remove a specific resource by id
	- **Message body**:
		- Bisa berbentuk JSON, atau data lain
	- **Header**
- **Response** terdiri dari:
	- Content Types: tipe konten, misal text/html, application/xhtml, dll
	- Status Code: ![](Pasted%20image%2020220522174843.png)


## Contoh GET Requests dan Response
- **Request**:
	- GET http://fashionboutique.com/customers
	- Accept: application/json
- **Response**:
	- Status code - 200 (OK)
	- Body: 
```json
{
  "books": [
    {
      "id": 1,
      "name": “Spring Rolls”,
      "price": 6
    },
    {
      "id": 2,
      "name": “Mozzarella Sticks”,
      "price": 7
    },
    {
      "id": 1223,
      "name": “Avocado Toast”,
      "price": 8
    },
    {
      "id": 1224,
      "name": “Muesli and Yogurt”,
      "price": 5
    }
  ]
}
```


# Next.js API Routes
- Referensi: 
	- https://nextjs.org/docs/api-routes/introduction
	- https://nextjs.org/docs/api-routes/dynamic-api-routes
	- https://nextjs.org/docs/api-routes/response-helpers
- **Sering-sering baca docs**
- Contoh struktur folder & file:
![](docs/assets/Pasted%20image%2020220522200034.png)


# Contoh sederhana kode:
File: `/pages/api/items/index.js`
```js
import Item from "../../../models/Item" // mengimpor objek Items

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
		res.status(200).json(item);

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
```

File: `/pages/api/items/[itemId].js`
```js
import Item from "../../../models/Item" // mengimpor objek Items

// Menerima request pada path /api/items/:itemId
export default function async handler(req, res) {
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
```


# Mongoose
https://mongoosejs.com/docs/guide.html
- Referensi: 
	- Query: https://mongoosejs.com/docs/queries.html
	- Membuat document: https://mongoosejs.com/docs/models.html#constructing-documents


# Postman
- Untuk membuat dokumentasi API (agar dapat digunakan oleh frontend developer)
- Referensi: https://learning.postman.com/docs/getting-started/introduction/


# Referensi
- Apa itu REST API: https://www.codecademy.com/article/what-is-rest
- Apa itu CRUD (create, read, update, delete) https://www.codecademy.com/article/what-is-crud
- Membuat dokumentasi API menggunakan Postman: https://learning.postman.com/docs/getting-started/introduction/
- Mongoose (library untuk hal yg berhubungan dengan database MongoDB): https://mongoosejs.com/docs/guide.html
- Next.js API Routes https://nextjs.org/docs/api-routes/introduction
- Next.js Dynamic API Routes https://nextjs.org/docs/api-routes/dynamic-api-routes