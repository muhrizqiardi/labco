import Link from "next/link";

function BreadcrumbHome() {
  return (
    <svg
      className="mr-2 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
    </svg>
  );
}

function BreadcrumbChevron() {
  return (
    <svg
      className="w-6 h-6 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

function Breadcrumb({ items }) {
  return (
    <nav
      className="flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200  "
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900  ">
              <BreadcrumbHome />
              Home
            </a>
          </Link>
        </li>
        {items
          .map((item) => (
            <li>
              <div className="flex items-center">
                <Link href={items?.href ?? "#"}>
                  <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900  ">
                    <BreadcrumbChevron />
                    {item?.name ?? ""}
                  </a>
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
export default Breadcrumb;