import Agenda from "../components/AgendaWidget";
import Button from "../components/Button";
import News from "../components/NewsWidget";
import PageLayout from "../components/PageLayout";

function LandingPage() {
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Home"}
      menuItems={[
        { title: "Akun", href: "/akun", icon: "bx bx-user" },
        { title: "Jadwal Agenda", href: "/agenda", icon: "bx bx-calendar" },
        { title: "Berita dan Informasi", href: "/berita", icon: "bx bx-news" },
      ]}
    >
      <section className="py-16 px-4 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm">Senin, 23 Mei 2022, pukul 16.59</p>
        <h1 className="text-3xl font-bold">Selamat Datang di LABCO</h1>
        <p className="text-sm">Sistem Informasi Lab</p>
        <div className="my-6 flex md:flex-col gap-2">
          <Button.Primary>Masuk</Button.Primary>
          <Button.Secondary>Buat Akun</Button.Secondary>
        </div>
      </section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-start">
        <Agenda />
        <News />
      </div>
    </PageLayout>
  );
}
export default LandingPage;
