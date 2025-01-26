import { Link } from "react-router";
import dot from "../assets/images/orangeDot.png"

const Navbar = () => {
    const navlinks = <>
      <ul className="flex">
        <Link to="/"><li className="ml-4 text-lg">Home</li></Link>
        <Link><li className="ml-4 text-lg">about</li></Link>
        <Link><li className="ml-4 text-lg">contact</li></Link>
        <Link><li className="ml-4 text-lg">Service</li></Link>
        <Link><li className="ml-4 text-lg">Portfolio</li></Link>
      </ul>
    </>
    return (
        <div className="navbar bg-[#fff3ea] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navlinks}
            </ul>
          </div>
          <div
  className="relative flex items-center justify-center bg-orange-500 rounded-full w-10 h-10 bg-cover bg-center"
  // style={{ backgroundImage: `url(${dot})` }}
>
  <a className="btn btn-ghost text-3xl z-20">Jashim</a>
</div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
  <a className="btn p-6 bg-orange-500 text-white text-2xl hover:bg-black">
    Contact Us
  </a>
</div>

      </div>
    );
};

export default Navbar;