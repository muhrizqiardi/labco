import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";

function NewContent() {
  const [fileSrc, setFileSrc] = useState();

  return (
    <PageLayout isAdminPage={true} pageTitle={"LABCO Admin - Tulis Konten"}>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Tulis Konten</h1>
        <Button.Primary onClick={() => router.push("/admin/konten/new")}>
          Publikasikan
        </Button.Primary>
      </div>
      <ImageUploader
        label="Upload Thumbnail"
        fileSrc={fileSrc}
        setFileSrc={setFileSrc}
      />
      <div>
        <label htmlFor="bio" className="block text-xs text-gray-500 mb-2">
          Konten
        </label>
        <textarea
          id="konten"
          rows={20}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
          placeholder=""
          defaultValue={""}
        />
      </div>
    </PageLayout>
  );
}
export default NewContent;
