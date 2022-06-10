import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import ImageUploader from "../../../components/ImageUploader";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";
import { useRouter } from "next/router";
import moment from "moment";

function EditAgenda() {
  // fetch from /api/agenda/:agendaId based on url parameter
  const router = useRouter();
  const [agenda, setAgenda] = useState({});
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (!router.isReady) return;
    fetch(`/api/agenda/${router.query.agendaId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data: data.data });
        setAgenda(data.data);
        setIsLoading(false);
      });
  }, [router.isReady]);

  return !isLoading ? (
    <>
      <PageLayout
        isAdminPage={true}
        pageTitle={"LABCO Admin - Barang Baru"}
        isRequireAuth
      >
        <h1 className="text-2xl font-bold">Edit Agenda</h1>
        <form
          onSubmit={async (event) => {
            // post form values to /api/agenda
            event.preventDefault();
            fetch("/api/agenda", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: event.target.title.value,
                startTime: event.target.startTime.value,
                finishedTime: event.target.finishedTime.value,
                lecturer: event.target.lecturer.value,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log({ data });
                window.location.reload();
              });
          }}
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <TextField
            label="Nama Agenda"
            name="title"
            type="text"
            defaultValue={agenda?.title}
            required
          />
          <TextField
            label="Waktu Mulai"
            name="startTime"
            type="datetime-local"
            defaultValue={moment(agenda?.startTime).format("YYYY-MM-DDTHH:mm")}
            required
          />
          <TextField
            label="Waktu Selesai"
            name="finishedTime"
            type="datetime-local"
            defaultValue={moment(agenda?.finishedTime).format(
              "YYYY-MM-DDTHH:mm"
            )}
            required
          />
          <TextField
            label="Dosen Pengampu"
            name="lecturer"
            type="email"
            defaultValue={agenda?.lecturer}
            required
          />
          <Button.Primary>Edit Barang</Button.Primary>
        </form>
      </PageLayout>
    </>
  ) : (
    <></>
  );
}
export default EditAgenda;
