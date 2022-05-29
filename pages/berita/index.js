import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";

function Berita() {
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Berita dan Informasi"}
      menuItems={[
        { title: "Home", href: "/", icon: "bx bx-home" },
        { title: "Akun", href: "/akun", icon: "bx bx-user" },
        {
          title: "Isi Buku Tamu",
          href: "/buku-tamu",
          icon: "bx bx-book",
        },
        { title: "Jadwal Agenda", href: "/agenda", icon: "bx bx-calendar" },
        {
          title: "Berita dan Informasi",
          href: "/berita",
          icon: "bx bxs-news",
          isCurrentPage: true,
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
      <Breadcrumb items={[{ href: "/berita", name: "Berita" }]} />
      <div className="mx-auto max-w-xl">
        <div className="flex flex-col">
          {Array(5)
            .fill(0)
            .map((news) => (
              <article className="flex flex-col py-4 md:flex-row gap-2 md:gap-4 border-b">
                <img
                  src="https://picsum.photos/id/237/200/300"
                  className="w-full h-56 md:h-28 bg-gray-200 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <Link href={"/berita/123"}>
                    <a className="text-sm font-bold hover:underline">
                      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor`}
                    </a>
                  </Link>
                  <p className="mb-1.5 text-xs text-gray-700">
                    22 Juni 2023, pukul 13:11
                  </p>
                  <p className="text-xs text-gray-800">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor, consectetur adipiscing elit, sed do
                    eiusmod tempor, consectetur adipiscing elit, sed do eiusmod
                    tempor`}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </PageLayout>
  );
}
export default Berita;
