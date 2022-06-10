import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import PageLayout from "../../components/PageLayout";
import TextField from "../../components/TextField";
import moment from "moment";
import GuestBookWidget from "../../components/GuestBookWidget";

function BukuTamu() {
  return (
    <PageLayout isAdminPage={false} isRequireAuth={true} pageTitle={"LABCO - Isi Buku Tamu"}>
      <Breadcrumb items={[{ href: "/buku-tamu", name: "Buku Tamu" }]} />
      <h1 className="text-2xl font-bold">Isi Buku Tamu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("/api/guest-book", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              startTime: e.target.startTime.value,
              finishedTime: e.target.finishedTime.value,
              usagePurpose: e.target.usagePurpose.value,
            }),
          }).then((res) => {
            window.location.pathname = "/buku-tamu";
          });
        }}
        className="max-w-2xl flex flex-col items-stretch gap-4"
      >
        <TextField
          label="Dari jam"
          name="startTime"
          type="datetime-local"
          defaultValue={moment().format("YYYY-MM-DDTHH:mm")}
          required
        />
        <TextField
          label="Sampai jam"
          name="finishedTime"
          type="datetime-local"
          defaultValue={moment().add(1, "hour").format("YYYY-MM-DDTHH:mm")}
          required
        />
        <TextField label="Keperluan" name="usagePurpose" required />

        <div className="my-4"></div>
        <Button.Primary>Submit</Button.Primary>
        <GuestBookWidget />
      </form>
    </PageLayout>
  );
}
export default BukuTamu;
