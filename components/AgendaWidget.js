import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";

function Agenda(props) {
  // fetch from api /api/agenda with query parameter date = today's date
  const [agenda, setAgenda] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/agenda?date=${moment().format("YYYY-MM-DD")}`)
      .then((res) => res.json())
      .then((data) => setAgenda(data));
    setIsLoading(false);
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-lg border sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Agenda Hari Ini
        </h5>
      </div>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Loading...
        </div>
      ) : (
        <></>
      )}
      {!isLoading ? (
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {agenda?.data?.map((agendaItem, i) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <Link href={`/detail-agenda/${agendaItem?._id}`}>
                      <a className="text-sm font-medium text-gray-900 truncate hover:underline">
                        {agendaItem?.title}
                      </a>
                    </Link>
                    <p className="text-sm text-gray-500 truncate ">
                      {moment(agendaItem?.date).format("dddd, DD MMMM YYYY")}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {!isLoading && agenda?.data?.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Data kosong
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-row-reverse justify-between items-center mt-4">
        <Link href="/agenda">
          <a className="text-sm font-medium text-blue-600 hover:underline ">
            Lihat selengkapnya
          </a>
        </Link>
      </div>
    </div>
  );
}
export default Agenda;
