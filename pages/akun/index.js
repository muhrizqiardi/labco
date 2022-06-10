import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import TextField from "../../components/TextField";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import ImageUploader from "../../components/ImageUploader";

function Akun() {
  const { data } = useSession();
  const [fileSrc, setFileSrc] = useState();

  console.log({data});

  console.log(data?.user?.bio);

  return (
    <PageLayout
      isAdminPage={false}
      isRequireAuth
      pageTitle={"LABCO - Edit Informasi Akun"}
    >
      <Breadcrumb items={[{ href: "/akun", name: "Edit Informasi Akun" }]} />
      <section className="py-16 px-4 flex flex-col items-center justify-center gap-4 text-center">
        {data?.user?.profilePicture ? (
          <img
            src={data?.user?.profilePicture}
            alt=""
            className="w-24 h-24 object-cover rounded-full border-2 border-black"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full border-2 border-transparent"></div>
        )}
        <p className="text-3xl font-bold">{data?.user.fullName ?? ""}</p>
        <Button.Secondary onClick={() => signOut()}>
          <div className="span text-red-600">Logout</div>
        </Button.Secondary>

        <ImageUploader
          label="Ubah  Profile Picture"
          {...{ fileSrc, setFileSrc }}
        />

        <form
          className="max-w-2xl mt-8 flex flex-col items-stretch gap-4 text-left"
          onSubmit={async (event) => {
            event.preventDefault();
            const submitValue = {
              fullName: event.target.fullName.value,
              email: event.target.email.value,
              bio: event.target.bio.value,
              profilePicture: fileSrc,
            };
            if (fileSrc) {
              submitValue.profilePicture = fileSrc;
            }
            try {
              await fetch(`/api/user/${data?.user._id}`, {
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
        >
          <TextField
            label="Nama Lengkap"
            name="fullName"
            type="text"
            defaultValue={data?.user.fullName ?? ""}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            defaultValue={data?.user.email ?? ""}
          />
          <div>
            <label htmlFor="bio" className="block text-xs text-gray-500 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
              placeholder="Biodata"
              name="bio"
            >
              {data?.user?.bio}
            </textarea>
          </div>
          <Button.Primary>Simpan</Button.Primary>
        </form>
      </section>
    </PageLayout>
  );
}
export default Akun;
