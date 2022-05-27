import Link from "next/link";

function Agenda(props) {
  return (
    <div className="p-4 bg-white rounded-lg border sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">
          Agenda Mendatang
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Lab 1: Mata kuliah jarkom
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  Sekarang, pukul 15.00
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
