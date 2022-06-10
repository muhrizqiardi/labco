import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Agenda from "../components/AgendaWidget";
import Button from "../components/Button";
import News from "../components/NewsWidget";
import PageLayout from "../components/PageLayout";
import moment from "moment";

function LandingPage() {
  const router = useRouter();
  const { status } = useSession();

  return (
    <PageLayout isAdminPage={false}>
      <section className="py-16 px-4 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm">
          {moment().format("dddd, DD MMMM YYYY, [pukul] hh.mm")}
        </p>
        <h1 className="text-3xl font-bold">Selamat Datang di LABCO</h1>
        <p className="text-sm">Sistem Informasi Lab</p>
        {status !== "authenticated" ? (
          <div className="my-6 flex md:flex-col gap-2">
            <Button.Primary onClick={() => router.push("/login")}>
              Masuk
            </Button.Primary>
            <Button.Secondary onClick={() => router.push("/signup")}>
              Buat Akun
            </Button.Secondary>
          </div>
        ) : (
          <Button.Primary onClick={() => router.push("/buku-tamu")}>
            Isi Buku Tamu
          </Button.Primary>
        )}
      </section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-start">
        <Agenda />
        <div className="col-span-2">
          <News />
        </div>
      </div>
    </PageLayout>
  );
}
export default LandingPage;
