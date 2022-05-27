import Head from "next/head";
import Agenda from "../components/Agenda";
import PageLayout from "../components/PageLayout";
import Welcome from "../components/Welcome";

// Admin Dashboard
export default function AdminDashboard() {
  return (
    <>
      <PageLayout isAdminPage={true}></PageLayout>
    </>
  );
}
