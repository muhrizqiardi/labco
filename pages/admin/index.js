import Head from "next/head";
import Agenda from "../../components/AgendaWidget";
import PageLayout from "../../components/PageLayout";
import Welcome from "../../components/Welcome";
import { useSession, signIn, signOut } from "next-auth/react";

// Admin Dashboard
export default function AdminDashboard() {
  return (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Home"}
      isRequireAuth
    ></PageLayout>
  );
}
