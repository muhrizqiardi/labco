import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MultiLine from "../../components/MultiLine";

function Berita() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { newsSlug } = router.query;

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/news/${newsSlug}`)
      .then((res) => res.json())
      .then((data) => setNewsData(data));
    setIsLoading(false);
  }, [newsSlug, router.isReady]);

  return (
    <PageLayout isAdminPage={false} pageTitle={"LABCO - Berita dan Informasi"}>
      <Breadcrumb items={[{ href: "/berita", name: "Berita" }]} />
      {!isLoading ? (
        <section className="flex flex-col items-stretch gap-4 mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold">{newsData?.data?.title}</h1>
          <img
            src={newsData?.data?.coverImage}
            alt=""
            className="h-96 object-contain bg-black"
          />
          <article className="w-full py-5 px-6 mb-24 prose prose-lg prose-yellow max-w-none">
            <MultiLine lines={newsData?.data?.body} />
          </article>
        </section>
      ) : (
        <></>
      )}
    </PageLayout>
  );
}
export default Berita;
