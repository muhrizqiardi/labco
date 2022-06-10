import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function DetailAgenda() {
  const [agenda, setAgenda] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();
  const { agendaId } = router.query;

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/agenda/${agendaId}`)
      .then((res) => res.json())
      .then((data) => setAgenda(data));
    setIsLoading(false);
  }, [router.isReady]);

  return isLoading ? (
    <></>
  ) : (
    <PageLayout
      isAdminPage={false}
      pageTitle={"LABCO - Home"}
    >
      <Breadcrumb
        items={[
          { href: "/agenda", name: "Agenda" },
          { href: "#", name: "Detail Agenda" },
        ]}
      />
      <h1 className="text-2xl font-bold">{agenda?.data?.title}</h1>
      <section className="flex flex-col">
        <p className="text-sm">
          <span className="font-bold">Dari</span>:{" "}
          {moment
            .utc(agenda?.data?.startTime)
            .format("dddd, DD MMMM YYYY, HH:mm")}
        </p>
        <p className="text-sm">
          <span className="font-bold">Dari</span>:{" "}
          {moment
            .utc(agenda?.data?.finishedTime)
            .format("dddd, DD MMMM YYYY, HH:mm")}
        </p>
        <p className="text-sm">
          <span className="font-bold">Dosen Pengampu</span>:{" "}
          <Link href={`mailto:${agenda?.data?.lecturer}`}>
            <a className="text-blue-700 hover:underline inline-flex items-center gap-0.5">
              <i className="bx bx-user"></i>
              <span>{agenda?.data?.lecturer}</span>
            </a>
          </Link>
        </p>
      </section>
    </PageLayout>
  );
}
export default DetailAgenda;
