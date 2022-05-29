import Link from "next/link";
import Button from "../../../components/Button";
import PageLayout from "../../../components/PageLayout";
import Table from "../../../components/Table";

function ManajemenInventaris() {
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
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Inventaris</h1>
        <Button.Primary>Tambah Barang Baru</Button.Primary>
      </div>
      <Table
        tableHeaders={[
          "ID",
          "Nama",
          "Qty",
          "Kondisi",
          "Tanggal ditambahkan",
          "Aksi",
        ]}
        tableData={[
          [
            "62930cbe865bffba2c0a6ccd",
            "Kursi Herman Miller",
            "10",
            "Baik",
            "Minggu, 29 Mei 2022, pukul 08.25",
            <>
              <Link href="/inventaris/123">
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ],
          [
            "62930cbe865bffba2c0a6ccd",
            "ASUS ROG Strix",
            "15",
            "Rusak",
            "Senin, 30 Mei 2022, pukul 13.00",
            <>
              <Link href="/inventaris/123">
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ],
        ]}
      />
    </PageLayout>
  );
}
export default ManajemenInventaris;
