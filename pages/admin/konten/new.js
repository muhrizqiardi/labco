import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function NewContent() {
  const [fileSrc, setFileSrc] = useState();

  return (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Tulis Konten"}
      isRequireAuth
    >
      <form
        onSubmit={async (event) => {
          // post form values to /api/agenda
          event.preventDefault();
          if (!fileSrc) return alert("Tambahkan thumbnail gambar");
          fetch("/api/news", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: event.target.title.value,
              body: event.target.body.value,
              coverImage: fileSrc,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log({ data });
              window.location.pathname = `/admin/konten/${data.data.slug}`;
            })
            .catch((error) => {
              console.log({ error });
            });
        }}
        className="flex flex-col gap-4 "
      >
        <div className="flex justify-between items-center">
          <h1 className="text-md font-bold">Tulis Konten</h1>
          <Button.Primary type="submit">Publikasikan</Button.Primary>
        </div>
        <ImageUploader
          label="Upload Thumbnail"
          fileSrc={fileSrc}
          setFileSrc={setFileSrc}
        />
        <TextField label="Judul" name="title" type="text" required />
        <div>
          <label htmlFor="bio" className="block text-xs text-gray-500 mb-2">
            Konten
          </label>
          <textarea
            id="body"
            rows={20}
            className="block mb-8 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder=""
            name="body"
            defaultValue={""}
            required
          />
        </div>
      </form>
    </PageLayout>
  );
}
export default NewContent;
