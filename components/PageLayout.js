import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

function PageLayout({ pageTitle, children, isAdminPage, isRequireAuth }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { status, data: session } = useSession();
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
    ],
  };
  useEffect(() => {
    // redirect to login page if user is not logged in and page is protected
    if (status !== "loading") {
      if (isRequireAuth && status !== "authenticated") {
        window.location.href = "/login";
      }
    }
  }, [status]);

  if (status === "loading") {
    return <></>;
  }
  if (isAdminPage && session?.user?.role === "admin") {
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
              isAdminPage={isAdminPage}
              menuItems={isAdminPage ? menuItems.admin : menuItems.user}
            />
            <div className="w-full h-auto flex-auto p-4 flex flex-col items-stretch gap-4">
              {children}
            </div>
          </div>
        </div>
      </>
    );
  } else if (isAdminPage && session?.user?.role !== "admin") {
    return <>Anda tidak diperbolehkan mengakses halaman ini</>;
  } else if (!isAdminPage) {
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
              isAdminPage={isAdminPage}
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
}

export default PageLayout;
