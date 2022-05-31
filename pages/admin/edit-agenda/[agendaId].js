import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function EditAgenda() {
  const [fileSrc, setFileSrc] = useState();
  const [name, setName] = useState("");

  // create form submit handler, send post request to /api/items, include fileSrc, name, qty, and condition

  return (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Barang Baru"}
        menuItems={[
          {
            title: "Dashboard",
            href: "/admin",
            icon: "bx bx-home",
          },
          {
            title: "Manajemen Inventaris",
            href: "/admin/inventaris",
            icon: "bx bxs-user",
            isCurrentPage: true,
          },
          { title: "Manajemen User", href: "/admin/user", icon: "bx bx-user" },
          {
            title: "Manajemen Konten Informasi dan Berita",
            href: "/admin/konten",
            icon: "bx bx-news",
          },
          {
            title: (
              <>
                <div className="text-red-600">Logout</div>
              </>
            ),
            href: "/logout",
            icon: "bx bx-exit",
          },
        ]}
      >
        <h1 className="text-2xl font-bold">Edit Agenda</h1>
        <form
          action=""
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <TextField label="Nama Agenda" name="title" type="text" required />
          <TextField label="Waktu Mulai" name="startTime" type="datetime-local" required />
          <TextField label="Waktu Selesai" name="finishedTime" type="datetime-local" required />
          <TextField label="Dosen Pengampu" name="lecturer" type="email" required />
          <Button.Primary>Edit Barang</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default EditAgenda;
