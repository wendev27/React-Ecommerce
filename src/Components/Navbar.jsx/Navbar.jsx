import {
  Armchair,
  Check,
  Heart,
  Info,
  Search,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import { Link, NavLink } from "react-router";

function Nabvar() {
  return (
    <>
      <div>
        {/* Navbar Top */}
        <div className="navbar_top flex items-center justify-center bg-amber-800 h-[40px] w-full">
          <div className="lg:container flex justify-between items-center">
            <p className="flex items-center gap-2 text-sm font-inter font-normal text-white capitalize">
              <Check />
              {/* <Armchair /> */}
              Free on all orders over $50
            </p>

            <div className="navbar_top_right flex items-center gap-6">
              <select
                defaultValue="Server location"
                className="select select-neutral h-[30px] w-[100px] text-sm font-inter font-normal capitalize"
              >
                <option disabled={false}>eng</option>
                <option>tagalog</option>
              </select>

              <button>
                <Link className="text-sm text-white font-inter font-normal capitalize">
                  Faqs
                </Link>
              </button>
              <button>
                <Link className="flex items-center text-sm text-white font-inter font-normal capitalize">
                  <Info /> need help?
                </Link>
              </button>
              <button></button>
            </div>
          </div>
        </div>

        {/* Navbar Middle */}
        <div className="navbar_middle flex items-center justify-center bg-amber-700 w-full h-[84px]">
          <div className="lg:container flex items-center justify-between">
            {/* Middle left */}
            <div className="logo_wrapper">
              <Link
                to="/"
                className="text-3xl text-white font-inter font-medium capitalize flex items-center gap-2 "
              >
                <Armchair size="2rem" className="text-white" />
                Comfort
              </Link>
            </div>

            {/* middle */}
            <div className="search_box">
              <form action="#" className="w-70 h-[44px] relative">
                <input
                  type="text"
                  className="w-full h-full text-black bg-gray-200 rounded-lg pl-4"
                  placeholder="Search here..."
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <Search size="22px" className="text-amber-700" />
                </button>
              </form>
            </div>

            {/* navbar middle right */}
            <div className="navbar_middle_right flex items-center gap-4">
              <button className="btn capitalize">
                <ShoppingCart className="badge badge-sm"></ShoppingCart>
              </button>

              <button className="btn capitalize">
                <Heart />
              </button>

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  <User />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>
                      <Link to={"/auth/login"}>Account</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Logout</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Bottom */}

        <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-2 border-amber-700">
          <div className="lg:container flex items-center justify-between">
            {/* Right */}
            <div className="navbar_bottom_right flex items-center gap-8 ">
              <div className="dropdown dropdown-start">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 flex items-center gap-5 capitalize"
                >
                  <Menu /> all categories
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Chair</a>
                  </li>
                  <li>
                    <a>Pants</a>
                  </li>
                  <li>
                    <a>Shirt</a>
                  </li>
                  <li>
                    <a>T-Shirt</a>
                  </li>
                  <li>
                    <a>T-Shirt</a>
                  </li>
                </ul>
              </div>
              <nav className="flex items-center gap-6">
                <NavLink
                  to="/"
                  className="text-sm text-black font-inter font-medium capitalize"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm text-black font-inter font-medium capitalize"
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm text-black font-inter font-medium capitalize"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm text-black font-inter font-medium capitalize"
                >
                  Pages
                </NavLink>
                <NavLink
                  to="/"
                  className="text-sm text-black font-inter font-medium capitalize"
                >
                  About
                </NavLink>
              </nav>
            </div>

            <div className="navbar_bottom_right">
              <p>
                Contact <span className="text-black">(808)555-0111</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nabvar;
