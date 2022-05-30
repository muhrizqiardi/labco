import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function PageLayout({ pageTitle, children, isAdminPage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuItems = {
    admin: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: "bx bx-home",
        activeIcon: "bx bxs-home",
      },
      {
        title: "Manajemen Inventaris",
        href: "/admin/inventaris",
        icon: "bx bx-package",
        activeIcon: "bx bxs-package",
      },
      {
        title: "Manajemen User",
        href: "/admin/user",
        icon: "bx bx-user",
        activeIcon: "bx bxs-user",
      },
      {
        title: "Manajemen Konten Informasi dan Berita",
        href: "/admin/konten",
        icon: "bx bx-news",
        activeIcon: "bx bxs-news",
      },
      {
        title: "Manajemen Agenda",
        href: "/admin/agenda",
        icon: "bx bx-calendar",
        activeIcon: "bx bxs-calendar",
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
    ],
    user: [
      {
        title: "Home",
        href: "/",
        icon: "bx bx-home",
        activeIcon: "bx bxs-home",
      },
      {
        title: "Akun",
        href: "/akun",
        icon: "bx bx-user",
        activeIcon: "bx bxs-user",
      },
      {
        title: "Isi Buku Tamu",
        href: "/buku-tamu",
        icon: "bx bx-book",
        activeIcon: "bx bxs-book",
      },
      {
        title: "Jadwal Agenda",
        href: "/agenda",
        icon: "bx bx-calendar",
        activeIcon: "bx bxs-calendar",
      },
      {
        title: "Berita dan Informasi",
        href: "/berita",
        icon: "bx bx-news",
        activeIcon: "bx bxs-news",
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
    ],
  };

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
      </Head>
      <div className="h-screen flex flex-col items-stretch">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isAdminPage={isAdminPage}
        />
        <div className="flex grow">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            menuItems={isAdminPage ? menuItems.admin : menuItems.user}
          />
          <div className="w-full h-auto flex-auto p-4 flex flex-col items-stretch gap-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
