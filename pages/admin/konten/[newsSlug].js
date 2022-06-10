import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function EditContent() {
  const [fileSrc, setFileSrc] = useState();
  const router = useRouter();
  const [news, setNews] = useState({});
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/news/${router.query.newsSlug}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.data);
        setFileSrc(data.data.coverImage);
        setIsLoading(false);
      });
  }, [router.isReady]);

  console.log(news?.body);
  return !isLoading ? (
    <PageLayout
      isAdminPage={true}
      pageTitle={"LABCO Admin - Edit Konten"}
      isRequireAuth
    >
      <form
        onSubmit={(event) => {
          // create put request on /api/news/[newsSlug] and refresh page
          event.preventDefault();
          fetch(`/api/news/${news.slug}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: event.target.title.value,
              body: event.target.body.value,
              coverImage: fileSrc,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log({ data });
              window.location.pathname = `/admin/konten/${data.data.slug}`;
            });
        }}
        className="flex flex-col gap-4 "
      >
        <div className="flex justify-between items-center">
          <h1 className="text-md font-bold">Edit Konten</h1>
          <Button.Primary>Publikasikan</Button.Primary>
        </div>
        <ImageUploader
          label="Upload Thumbnail"
          fileSrc={fileSrc}
          setFileSrc={setFileSrc}
        />
        <TextField
          label="Judul"
          name="title"
          type="text"
          required
          defaultValue={news?.title}
        />
        <div>
          <label htmlFor="bio" className="block text-xs text-gray-500 mb-2">
            Konten
          </label>
          <textarea
            id="body"
            name="body"
            rows={20}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500      "
            placeholder=""
          >
            {news?.body}
          </textarea>
        </div>
      </form>
      <div className="flex justify-center">
        <Button.Secondary
          type="button"
          onClick={async () => {
            // create delete request to /api/news/[newsSlug] and redirect to /admin/konten
            fetch(`/api/news/${news.slug}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((data) => {
                console.log({ data });
                router.push("/admin/konten");
              })
              .catch((error) => {
                console.log({ error });
              });
          }}
        >
          <div className="text-red-600">Hapus Konten</div>
        </Button.Secondary>
      </div>
    </PageLayout>
  ) : (
    <></>
  );
}
export default EditContent;
