import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../../components/Button";
import PageLayout from "../../../components/PageLayout";
import Table from "../../../components/Table";
import { useEffect, useState } from "react";

function ManajemenInventaris() {
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.data);
        setIsLoading(false);
      });
  }, []);

  return !isLoading ? (
    <PageLayout
      isAdminPage={true}
      isRequireAuth
      pageTitle={"LABCO Admin - Manajemen Inventaris"}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Inventaris</h1>
        <Button.Primary onClick={() => router.push("/admin/inventaris/new")}>
          Tambah Barang Baru
        </Button.Primary>
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
          ...(items ?? []).map((item) => [
            item?._id ?? "-",
            item?.name ?? "-",
            item?.quantity ?? "-",
            item?.condition ? "Baik" : "Rusak",
            item?.createdAt ?? "-",
            <>
              <Link href={`/admin/inventaris/${item._id}`}>
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ]),
        ]}
      />
    </PageLayout>
  ) : (
    <></>
  );
}
export default ManajemenInventaris;
