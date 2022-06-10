import { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";

function InventoryWidget(props) {
  // fetch GET /api/guest-book and set it to guestBookData state
  const [inventoryData, setInventoryData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setInventoryData(data.data));
    setIsLoading(false);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8  ">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Inventaris
        </h5>

        <Link href="/admin/inventaris/new">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline "
          >
            + Tambah Barang Baru
          </a>
        </Link>
      </div>
      {isLoading ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Loading...
        </div>
      ) : (
        <></>
      )}
      {!isLoading && inventoryData?.length === 0 ? (
        <div className="h-64 flex items-center justify-center text-center text-gray-700">
          Data kosong
        </div>
      ) : (
        <></>
      )}
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          {(inventoryData ?? []).slice(0, 3).map((inventoryItem) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={inventoryItem?.image ?? ""}
                    alt={inventoryItem?.name ?? "-"}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    {inventoryItem?.name ?? "-"}
                  </p>
                  <p className="text-sm text-gray-500 truncate ">
                    Qty: {inventoryItem?.quantity ?? "-"}, Kondisi:{" "}
                    {inventoryItem?.condition ? (
                      "Baik"
                    ) : (
                      <>
                        <span className="text-red-600 font-bold">Rusak</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row-reverse justify-between items-center mt-4">
        <Link href="/admin/inventaris">
          <a className="text-sm font-medium text-blue-600 hover:underline ">
            Lihat selengkapnya
          </a>
        </Link>
      </div>
    </div>
  );
}
export default InventoryWidget;
