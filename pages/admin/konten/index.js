import Link from "next/link";
import Button from "../../../components/Button";
import PageLayout from "../../../components/PageLayout";
import Table from "../../../components/Table";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function ContentManagement() {
  const router = useRouter();

  // fetch data from /api/news and store it in news state
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/api/news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.data);
      });
  }, []);

  return (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Manajemen Konten"}
      isRequireAuth
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Manajemen Konten</h1>
        <Button.Primary onClick={() => router.push("/admin/konten/new")}>
          Tulis Berita Baru
        </Button.Primary>
      </div>
      <Table
        tableHeaders={["Slug", "Judul Artikel", "Penulis", "Tanggal", "Aksi"]}
        tableData={[
          ...news.map((newsItem) => [
            newsItem?.slug ?? "-",
            newsItem?.title ?? "-",
            newsItem?.author ?? "-",
            newsItem?.createdAt ?? "-",
            <>
              <Link href={`/admin/konten/${newsItem.slug}`}>
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ]),
        ]}
      />
    </PageLayout>
  );
}
export default ContentManagement;
