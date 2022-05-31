import { useState } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function UserEdit() {
  const [fileSrc, setFileSrc] = useState();
  const [name, setName] = useState("");

  return (
    <>
      <PageLayout isAdminPage={true} pageTitle={"LABCO Admin - Edit User"}>
        <h1 className="text-2xl font-bold">Edit User</h1>
        <form
          action=""
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <ImageUploader
            label="Upload Foto Profil"
            fileSrc={fileSrc}
            setFileSrc={setFileSrc}
          />
          <div className="mb-6">
            <div className="peer-focus:font-medium text-xs text-gray-500">
              Role
            </div>
            <div className="">
              <select
                required
                name="condition"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Pilih kondisi</option>
                <option value="true">Admin</option>
                <option value="false">User</option>
              </select>
            </div>
          </div>
          <TextField label="Email" name="email" type="email" required />
          <TextField label="Password" name="password" type="password" required />

          <Button.Primary>Edit User</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default UserEdit;
