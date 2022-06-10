import { useEffect, useState } from "react";
import moment from "moment";

function GuestBookWidget() {
  // fetch GET /api/guest-book and set it to guestBookData state
  const [guestBookData, setGuestBookData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/guest-book")
      .then((res) => res.json())
      .then((data) => setGuestBookData(data.data));
    setIsLoading(false);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg border shadow sm:p-8  ">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Buku Tamu
        </h5>
      </div>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Loading...
        </div>
      ) : (
        <></>
      )}
      {!isLoading && guestBookData?.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Data kosong
        </div>
      ) : (
        <></>
      )}
      {!isLoading ? (
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            {(guestBookData ?? []).map((guestBookItem) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate ">
                      {guestBookItem?.usagePurpose ?? "-"}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      <span className="font-medium">oleh</span>: {guestBookItem?.user ?? "-"}
                    </p>
                    <p className="text-xs text-gray-500 truncate ">
                      {moment(guestBookItem?.startTime).format("hh:mm")} - {moment(guestBookItem?.finishedTime).format("hh:mm")}
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
    </div>
  );
}
export default GuestBookWidget;
