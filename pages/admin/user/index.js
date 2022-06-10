import PageLayout from "../../../components/PageLayout";
import Link from "next/link";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function User() {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  return (
    <PageLayout title="LABCO - Manajemen User" isAdminPage isRequireAuth>
      <h1 className="text-2xl font-bold">Manajemen User</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">User</h1>
      </div>
      <Table
        tableHeaders={["ID", "Nama", "Email", "Role", "Aksi"]}
        tableData={[
          ...(users ?? []).map((user) => [
            user?._id ?? "-",
            user?.fullName ?? "-",
            user?.email ?? "-",
            user?.role ?? "-",
            <>
              <Link href={`/admin/user/${user._id}`}>
                <a className="text-blue-700 font-bold hover:underline">Edit</a>
              </Link>
            </>,
          ]),
        ]}
      />
    </PageLayout>
  );
}
export default User;
