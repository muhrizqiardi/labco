import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function InventarisNew() {
  const [fileSrc, setFileSrc] = useState();
  const [name, setName] = useState("");

  // create form submit handler, send post request to /api/items, include fileSrc, name, qty, and condition

  return (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Barang Baru"}
        isRequireAuth
      >
        <h1 className="text-2xl font-bold">Tambah Barang Baru</h1>
        <form
          onSubmit={async (event) => {
            // post form values to /api/agenda
            event.preventDefault();
            if (!fileSrc) return alert("Tambahkan gambar barang");
            fetch("/api/items", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: event.target.name.value,
                condition: event.target.condition.value,
                quantity: event.target.quantity.value,
                image: fileSrc,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log({ data });
                window.location.pathname = `/admin/inventaris`;
              })
              .catch((error) => {
                console.log({ error });
              });
          }}
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <ImageUploader
            label="Upload Gambar Barang"
            fileSrc={fileSrc}
            setFileSrc={setFileSrc}
          />
          <TextField label="Nama Barang" name="name" type="text" required />
          <TextField
            label="Qty"
            name="quantity"
            type="number"
            defaultValue={1}
            required
          />
          <div className="mb-6">
            <div className="peer-focus:font-medium text-xs text-gray-500">
              Kondisi
            </div>
            <div className="">
              <select
                required
                name="condition"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Pilih kondisi</option>
                <option value="true">Baik</option>
                <option value="false">Rusak</option>
              </select>
            </div>
          </div>

          <Button.Primary>Tambah Barang</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default InventarisNew;
