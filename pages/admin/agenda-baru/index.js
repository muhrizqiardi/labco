import { useState } from "react";
import Button from "../../../components/Button";
import PageLayout from "../../../components/PageLayout";
import TextField from "../../../components/TextField";

function NewAgenda() {
  return (
    <>
      <PageLayout
        isAdminPage={true}
        isRequireAuth
        pageTitle={"LABCO Admin - Barang Baru"}
      >
        <h1 className="text-2xl font-bold">Agenda Baru</h1>
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
                console.log({data});
                window.location.pathname = `/admin/edit-agenda/${data.data._id}`;
              });
          }}
          className="max-w-2xl mt-8  flex flex-col items-stretch gap-4"
        >
          <TextField label="Nama Agenda" name="title" type="text" required />
          <TextField
            label="Waktu Mulai"
            name="startTime"
            type="datetime-local"
            required
          />
          <TextField
            label="Waktu Selesai"
            name="finishedTime"
            type="datetime-local"
            required
          />
          <TextField
            label="Dosen Pengampu"
            name="lecturer"
            type="email"
            required
          />
          <Button.Primary>Buat Agenda</Button.Primary>
        </form>
      </PageLayout>
    </>
  );
}
export default NewAgenda;
