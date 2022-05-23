function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <aside
      className={`w-full h-screen md:h-full md:w-64 fixed top-0 ${
        isSidebarOpen ? "right-0" : "-right-full"
      } md:static bg-white border-r flex-shrink-0 self-stretch`}
    >
      <button
        onClick={() => setIsSidebarOpen((x) => !x)}
        className="mx-4 my-6 px-2 py-1 md:hidden text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
      >
        <i className="bx bx-x text-3xl" />
      </button>
      <div className="overflow-y-auto py-4 px-3 rounded">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default Sidebar;
