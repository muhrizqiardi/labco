import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function UserEdit() {
  const [fileSrc, setFileSrc] = useState();
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/user/${router.query.userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data: data.data });
        setUser(data.data);
        setFileSrc(data?.data.profilePicture ?? null)
        setIsLoading(false);
      });
  }, [router.isReady]);

  return (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Edit User"}
        isRequireAuth
      >
        <h1 className="text-2xl font-bold">Edit User</h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log("bebek");
            const submitValue = {
              role: event.target.role.value,
              fullName: event.target.fullName.value,
              email: event.target.email.value,
            };
            if (fileSrc) {
              submitValue.profilePicture = fileSrc;
            }
            try {
              await fetch(`/api/user/${user?._id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(submitValue),
              });
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }}
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
                name="role"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none   focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="admin" selected={user?.role === "admin"}>
                  Admin
                </option>
                <option value="user" selected={user?.role === "user"}>
                  User
                </option>
              </select>
            </div>
          </div>
          <TextField
            label="Email"
            name="email"
            type="email"
            defaultValue={user.email}
            required
          />
          <TextField
            label="Nama Lengkap"
            name="fullName"
            type="text"
            defaultValue={user.fullName}
            required
          />

          <Button.Primary type="submit">Edit User</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default UserEdit;
