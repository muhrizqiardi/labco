import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function PageLayout({ pageTitle, menuItems, children, isAdminPage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <title>{pageTitle}</title>
      </Head>
      <div className="h-screen flex flex-col items-stretch">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isAdminPage={isAdminPage}
        />
        <div className="flex grow">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            menuItems={menuItems}
          />
          <div className="w-full h-auto flex-auto p-4 flex flex-col items-stretch gap-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageLayout;
