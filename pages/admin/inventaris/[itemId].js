import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function ItemDetail() {
  const [fileSrc, setFileSrc] = useState();
  const [name, setName] = useState("");

  return (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Barang Baru"}
      >
        <h1 className="text-2xl font-bold">Edit Barang</h1>
        <form
          action=""
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <ImageUploader
            label="Upload Gambar Barang"
            fileSrc={fileSrc}
            setFileSrc={setFileSrc}
          />
          <TextField label="Nama Barang" name="name" type="text" required />
          <TextField label="Qty" name="qty" type="number" value={1} required />
          <div className="mb-6">
            <div className="peer-focus:font-medium text-xs text-gray-500">
              Kondisi
            </div>
            <div className="">
              <select
                required
                name="condition"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Pilih kondisi</option>
                <option value="true">Baik</option>
                <option value="false">Rusak</option>
              </select>
            </div>
          </div>

          <Button.Primary>Edit Barang</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default ItemDetail;
