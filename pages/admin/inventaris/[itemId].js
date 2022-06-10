import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function ItemDetail() {
  const [fileSrc, setFileSrc] = useState();
  const router = useRouter();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/items/${router.query.itemId}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.data);
        setFileSrc(data.data.image);
        setIsLoading(false);
      });
  }, [router.isReady]);

  return (
    <>
      <PageLayout
        isAdminPage={true}
        isRequireAuth
        pageTitle={"LABCO Admin - Barang Baru"}
      >
        <h1 className="text-2xl font-bold">Edit Barang</h1>
        <form
          onSubmit={async (event) => {
            // post form values to /api/agenda
            event.preventDefault();
            if (!fileSrc) return alert("Tambahkan gambar barang");
            fetch(`/api/items/${router.query.itemId}`, {
              method: "PUT",
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
          <TextField
            label="Nama Barang"
            name="name"
            type="text"
            defaultValue={item.name}
            required
          />
          <TextField
            label="Qty"
            name="quantity"
            type="number"
            defaultValue={item.quantity}
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
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Pilih kondisi</option>
                <option value="true" selected={item.condition}>
                  Baik
                </option>
                <option value="false" selected={!item.condition}>
                  Rusak
                </option>
              </select>
            </div>
          </div>

          <Button.Primary>Simpan</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default ItemDetail;
