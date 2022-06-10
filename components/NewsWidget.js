import Link from "next/link";
import { useState, useEffect } from "react";

function News() {
  // fetch from api /api/news with loading state
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
    setIsLoading(false);
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg border sm:p-8 col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Berita dan Informasi
        </h5>
      </div>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Loading...
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col">
        {news?.data?.map((news) => (
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
        {!isLoading && news?.data?.length === 0 ? (
          <div className="h-64 flex items-center justify-center text-center text-gray-700">
            Data kosong
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default News;
