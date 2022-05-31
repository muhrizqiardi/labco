import Link from "next/link";
import Button from "../../../components/Button";
import PageLayout from "../../../components/PageLayout";
import Table from "../../../components/Table";
import { useRouter } from "next/router";

function ContentManagement() {
  const router = useRouter();

  return (
    <PageLayout isAdminPage={true} pageTitle={"LABCO Admin - Manajemen Konten"}>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Manajemen Konten</h1>
        <Button.Primary onClick={() => router.push("/admin/konten/new")}>
          Tulis Berita Baru
        </Button.Primary>
      </div>
      <Table
        tableHeaders={["Slug", "Judul Artikel", "Penulis", "Tanggal", "Aksi"]}
        tableData={[
          [
            "bebek-goreng-enak-rasanya-beebeb-aku-",
            "Led ask possible mistress relation elegance eat likewise debating",
            "rizqi.jpg@gmail.com",
            "13 April 2020, pukul 13.00",
            <>
              <Link href="/admin/user/123">
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ],
          [
            "bebek-goreng-enak-rasanya-beebeb-aku-",
            "Led ask possible mistress relation elegance eat likewise debating",
            "rizqi.jpg@gmail.com",
            "13 April 2020, pukul 13.00",
            <>
              <Link href="/admin/user/123">
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ],
        ]}
      />
    </PageLayout>
  );
}
export default ContentManagement;
