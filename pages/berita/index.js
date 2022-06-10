import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../components/PageLayout";
import { useState, useEffect } from "react";

function Berita() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
    setIsLoading(false);
  }, []);

  return (
    <PageLayout isAdminPage={false} pageTitle={"LABCO - Berita dan Informasi"}>
      <Breadcrumb items={[{ href: "/berita", name: "Berita" }]} />
      <div className="mx-auto max-w-xl">
        {!isLoading && (
          <div className="flex flex-col">
            {newsData?.data?.map((news) => (
              <article className="flex flex-col py-4 md:flex-row gap-2 md:gap-4 border-b">
                <img
                  src={news.coverImage}
                  className="w-32 h-56 md:h-28 flex-shrink-0 bg-gray-200 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <Link href={`/berita/${news.slug}`}>
                    <a className="text-sm font-bold hover:underline">
                      {news.title}
                    </a>
                  </Link>
                  <p className="mb-1.5 text-xs text-gray-700">
                    22 Juni 2023, pukul 13:11
                  </p>
                  <p className="text-xs text-gray-800">
                    {news.body.substring(0, 100)}...
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
export default Berita;
