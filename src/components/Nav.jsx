import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown -ml-7 lg:ml-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/applied">Applied Jobs</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="font-bold text-[18px] lg:text-[25px]">
            Career Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-base px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/applied">Applied Jobs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <NavLink
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            data-rounded="rounded-md"
            data-primary="blue-600"
            data-primary-reset="{}"
          >
            Start Applying
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
