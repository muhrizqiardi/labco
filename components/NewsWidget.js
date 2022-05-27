function News() {
  return (
    <div className="p-4 bg-white rounded-lg border sm:p-8 col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Berita dan Informasi
        </h5>
      </div>
      <div className="flex flex-col">
        {Array(5)
          .fill(0)
          .map((news) => (
            <article className="flex flex-col py-4 md:flex-row gap-2 md:gap-4 border-b">
              <div className="w-full h-56 md:h-28 bg-gray-200"></div>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-sm font-bold hover:underline">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </a>
                <p className="mb-1.5 text-xs text-gray-700">
                  22 Juni 2023, pukul 13:11
                </p>
                <p className="text-xs text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod
                  tempor, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
export default News;
