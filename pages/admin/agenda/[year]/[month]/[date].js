import Button from "../../../../../components/Button";
import PageLayout from "../../../../../components/PageLayout";
import { useRouter } from "next/router";
import moment from "moment";
import { useState, useEffect } from "react";
import Link from "next/link";

function Agenda() {
  const router = useRouter();
  const { year, month, date } = router.query;
  const today = moment().set({ year, month: month - 1, date });
  const [agenda, setAgenda] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/agenda?date=${today.format("YYYY-MM-DD")}`)
      .then((res) => res.json())
      .then((data) => setAgenda(data));
    setIsLoading(false);
  }, [router.isReady, today]);

  return (
    <PageLayout
      isAdminPage
      isRequireAuth
      pageTitle={"LABCO - Agenda " + today.format("dddd, DD MMMM YYYY")}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold">Manajemen Agenda</h1>
        <Button.Primary onClick={() => router.push("/admin/agenda-baru")}>
          Agenda Baru
        </Button.Primary>
      </div>
      <section className="flex gap-6">
        <Button.Secondary
          onClick={() => {
            const prevDay = today.subtract(1, "day");
            router.push(
              `/admin/agenda/${prevDay.format("YYYY")}/${prevDay.format(
                "MM"
              )}/${prevDay.format("DD")}`
            );
          }}
        >
          <i className="bx bx-chevron-left"></i>
        </Button.Secondary>
        <div className="flex-auto text-center flex justify-center items-center">
          <p>{today.format("dddd, DD MMMM YYYY")}</p>
        </div>
        <Button.Secondary
          onClick={() => {
            const nextDay = today.add(1, "day");
            router.push(
              `/admin/agenda/${nextDay.format("YYYY")}/${nextDay.format(
                "MM"
              )}/${nextDay.format("DD")}`
            );
          }}
        >
          <i className="bx bx-chevron-right"></i>
        </Button.Secondary>
      </section>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Loading...
        </div>
      ) : (
        <></>
      )}
      {!isLoading ? (
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {agenda?.data?.map((agendaItem, i) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <Link href={`/admin/edit-agenda/${agendaItem?._id}`}>
                      <a className="text-sm font-medium text-gray-900 truncate hover:underline">
                        {agendaItem?.title}
                      </a>
                    </Link>
                    <p className="text-sm text-gray-500 truncate ">
                      {moment(agendaItem?.startTime).format(
                        "dddd, DD MMMM YYYY, HH:mm"
                      )} - {moment(agendaItem?.finishedTime).format(
                        "dddd, DD MMMM YYYY, HH:mm"
                      )}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {!isLoading && agenda?.data?.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-400">
          Data kosong
        </div>
      ) : (
        <></>
      )}
    </PageLayout>
  );
}
export default Agenda;
