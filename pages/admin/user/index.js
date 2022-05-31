import PageLayout from "../../../components/PageLayout";
import Link from "next/link";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  
  return (
    <PageLayout title="LABCO - Manajemen User" isAdminPage>
      <h1 className="text-2xl font-bold">Manajemen User</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">User</h1>
      </div>
      <Table
        tableHeaders={["ID", "Nama", "Role", "Aksi"]}
        tableData={[
          [
            "62930cbe865bffba2c0a6ccd",
            "Kursi Herman Miller",
            "User",
            <>
              <Link href="/admin/user/123">
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ],
          [
            "62930cbe865bffba2c0a6ccd",
            "ASUS ROG Strix",
            "Admin",
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
export default User;
