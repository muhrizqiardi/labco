import Logo from "./Logo";

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <>
      <nav className="h-16 px-6 py-4 bg-white border-b flex justify-between items-center">
        <button
          onClick={() => setIsSidebarOpen((x) => !x)}
          className="px-2 py-1 md:hidden text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 "
        >
          <i className="bx bx-menu text-3xl" />
        </button>
        <Logo />
      </nav>
    </>
  );
}
export default Header;
