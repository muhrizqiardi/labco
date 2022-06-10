import Head from "next/head";
import Agenda from "../../components/AgendaWidget";
import PageLayout from "../../components/PageLayout";
import Welcome from "../../components/Welcome";
import moment from "moment";
import News from "../../components/NewsWidget";
import GuestBookWidget from "../../components/GuestBookWidget";
import InventoryWidget from "../../components/InventoryWidget";

// Admin Dashboard
export default function AdminDashboard() {
  return (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Home"}
      isRequireAuth
    >
      <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow">
        <p className="mb-2 font-normal text-gray-700 ">
          Selamat datang, Admin. Hari ini adalah
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
          {moment().format("dddd, DD MMMM YYYY, [pukul] hh.mm")}
        </h5>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-start">
        <div className="flex flex-col gap-4">
          <GuestBookWidget />
          <Agenda />
        </div>
        <div className="flex flex-col gap-4 col-span-2">
          <InventoryWidget />
          <News />
        </div>
      </div>
    </PageLayout>
  );
}
