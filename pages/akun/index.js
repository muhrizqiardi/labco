import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import TextField from "../../components/TextField";

function Akun() {
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Edit Informasi Akun"}
      menuItems={[
        { title: "Home", href: "/", icon: "bx bx-home" },
        {
          title: "Akun",
          href: "/akun",
          icon: "bx bxs-user",
          isCurrentPage: true,
        },
        { title: "Isi Buku Tamu", href: "/buku-tamu", icon: "bx bx-book" },
        { title: "Jadwal Agenda", href: "/agenda", icon: "bx bx-calendar" },
        { title: "Berita dan Informasi", href: "/berita", icon: "bx bx-news" },
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
      <Breadcrumb items={[{ href: "/akun", name: "Edit Informasi Akun" }]} />

      <section className="py-16 px-4 flex flex-col items-center justify-center gap-4 text-center">
        <img
          src="https://picsum.photos/id/237/200/300"
          alt=""
          className="w-24 h-24 object-cover rounded-full border-2 border-black"
        />
        <p className="text-3xl font-bold">Agus Widodo Wijaya</p>
        <Button.Secondary>
          <div className="span text-red-600">Logout</div>
        </Button.Secondary>
        <Button.Secondary>Ganti Foto Profil</Button.Secondary>

        <form
          action=""
          className="max-w-2xl mt-8 flex flex-col items-stretch gap-4 text-left"
        >
          <TextField
            label="Nama Lengkap"
            name="guestbookFormTimeStart"
            type="text"
          />
          <TextField label="Email" name="guestbookFormTimeStart" type="email" />
          <TextField
            label="Password"
            name="guestbookFormTimeStart"
            type="password"
          />
          <div>
            <label
              htmlFor="bio"
              className="block text-xs text-gray-500 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
              placeholder="Leave a comment..."
              defaultValue={""}
            />
          </div>
        </form>
      </section>
    </PageLayout>
  );
}
export default Akun;
