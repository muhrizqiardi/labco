import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import moment from "moment";
import Link from "next/link";

function DetailAgenda(props) {
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
      <Breadcrumb
        items={[
          { href: "/agenda/", name: "Agenda" },
          { href: "#", name: "Detail Agenda" },
        ]}
      />
      <h1 className="text-2xl font-bold">Open Class Linux for Sysadmin</h1>
      <section className="flex flex-col">
        <p className="text-sm">
          <span className="font-bold">Dari</span>: Senin, 22 Mei 2022, pukul
          07:00{" "}
        </p>
        <p className="text-sm">
          <span className="font-bold">Sampai</span>: Senin, 22 Mei 2022, pukul
          09:30{" "}
        </p>
        <p className="text-sm">
          <span className="font-bold">Dosen Pengampu</span>:{" "}
          <Link href={`/user/${123}`}>
            <a className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
              <i className="bx bx-user"></i>
              <span>Dr. Agus Widodo</span>
            </a>
          </Link>
        </p>
        <p className="text-sm">
          <span className="font-bold">Lokasi</span>: Lab 1
        </p>
      </section>
      <section className="flex flex-col">
        <p className="text-sm font-bold">Deskripsi:</p>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis et,
          voluptate temporibus blanditiis iusto vero iste dolore, consequuntur
          nihil sapiente in beatae, dolorem veniam fugit maxime ex corrupti
          deleniti! Sed laudantium neque cupiditate nulla, sint consequuntur
          ullam harum, reprehenderit necessitatibus in a asperiores libero sequi
          provident exercitationem assumenda quam sit!
        </p>
      </section>
    </PageLayout>
  );
}
export default DetailAgenda;
