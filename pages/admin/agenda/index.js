import { useRouter } from "next/router";
import { useEffect } from "react";
import moment from "moment";

function AgendaRedirect(props) {
  const router = useRouter();

  useEffect(() => {
    router.push(
      `/admin/agenda/${moment().format("YYYY")}/${moment().format("MM")}/${moment().format(
        "DD"
      )}`
    );
  }, []);
  
  return <></>;
}
export default AgendaRedirect;
