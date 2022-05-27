import Breadcrumb from "../../../../components/Breadcrumb";
import Button from "../../../../components/Button";
import PageLayout from "../../../../components/PageLayout";
import { useRouter } from "next/router";
import moment from "moment";

function Agenda() {
  const router = useRouter();
  const { year, month, date } = router.query;
  console.log({
    year: Number.parseInt(year),
    month: Number.parseInt(month),
    date: Number.parseInt(date),
  });
  return (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Home"}
      menuItems={[
        { title: "Akun", href: "/akun", icon: "bx bx-user" },
        { title: "Jadwal Agenda", href: "/agenda", icon: "bx bx-calendar" },
        { title: "Berita dan Informasi", href: "/berita", icon: "bx bx-news" },
      ]}
    >
      <Breadcrumb
        items={[
          { href: "/agenda/", name: "Agenda" },
        ]}
      />
      <h1 className="text-2xl font-bold">Jadwal Agenda</h1>
      <section className="flex gap-6">
        <Button.Secondary
          onClick={() => {
            const prevDay = moment()
              .set({ year, month, date })
              .subtract(1, "days");
            router.push(
              `/agenda/${prevDay.year()}/${prevDay.month()}/${prevDay.date()}`
            );
          }}
        >
          <i className="bx bx-chevron-left"></i>
        </Button.Secondary>
        <div className="flex-auto text-center flex justify-center items-center">
          <p>
            {moment().set({ year, month, date }).format("dddd, DD MMMM YYYY")}
          </p>
        </div>
        <Button.Secondary
          onClick={() => {
            const nextDay = moment().set({ year, month, date }).add(1, "day");
            router.push(
              `/agenda/${nextDay.year()}/${nextDay.month()}/${nextDay.date()}`
            );
          }}
        >
          <i className="bx bx-chevron-right"></i>
        </Button.Secondary>
      </section>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          {[0, 0, 0, 0].map((item) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Lab 1: Mata kuliah jarkom
                  </p>
                  <p className="text-sm text-gray-500 truncate ">
                    Sekarang, pukul 15.00
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
export default Agenda;
