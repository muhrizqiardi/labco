import PageLayout from "../../../components/PageLayout";

function ManajemenKonten(props) {
  return (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Manajemen Inventaris"}
      menuItems={[
        {
          title: "Dashboard",
          href: "/admin",
          icon: "bx bx-home",
        },
        {
          title: "Manajemen Inventaris",
          href: "/admin/inventaris",
          icon: "bx bxs-user",
          isCurrentPage: true,
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
  );
}
export default ManajemenKonten;
