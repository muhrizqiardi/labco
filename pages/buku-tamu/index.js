import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import TextField from "../../components/TextField";

function BukuTamu() {
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Isi Buku Tamu"}
      menuItems={[
        { title: "Home", href: "/", icon: "bx bx-home" },
        { title: "Akun", href: "/akun", icon: "bx bx-user" },
        {
          title: "Isi Buku Tamu",
          href: "/buku-tamu",
          icon: "bx bxs-book",
          isCurrentPage: true,
        },
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
      <Breadcrumb items={[{ href: "/buku-tamu", name: "Buku Tamu" }]} />
      <h1 className="text-2xl font-bold">Isi Buku Tamu</h1>
      <form action="" className="max-w-2xl flex flex-col items-stretch gap-4">
        <TextField
          label="Dari jam"
          name="guestbookFormTimeStart"
          type="datetime-local"
        />
        <TextField
          label="Sampai jam"
          name="guestbookFormTimeEnd"
          type="datetime-local"
        />
        <TextField label="Keperluan" name="guestbookFormReason" />

        <div className="my-4"></div>
        <Button.Primary>Submit</Button.Primary>
      </form>
    </PageLayout>
  );
}
export default BukuTamu;
