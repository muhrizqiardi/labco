import Head from "next/head";
import Agenda from "../../components/AgendaWidget";
import PageLayout from "../../components/PageLayout";
import Welcome from "../../components/Welcome";

// Admin Dashboard
export default function AdminDashboard() {
  return (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Home"}
        menuItems={[
          {
            title: "Dashboard",
            href: "/admin",
            icon: "bx bxs-home",
            isCurrentPage: true,
          },
          {
            title: "Manajemen Inventaris",
            href: "/admin/inventaris",
            icon: "bx bx-user",
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
      ></PageLayout>
    </>
  );
}
