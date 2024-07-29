import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Avatar } from "antd";
import { Popover, } from 'antd';
import { getAuth, signOut } from 'firebase/auth'
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = () => {
  const { auth } = useAuth();
  const logOuthandler = () => {
    signOut(getAuth())
      .then(res => { console.log(res, "res") })
      .catch(err => { console.log(err, "err") })
  }
  const content = (
    <div className="flex flex-col gap-y-2">
      <p className="text-[14px]">{auth?.email}</p>
      <p className="hover:text-[#0077B6] cursor-pointer" >Profile</p>
      <button onClick={logOuthandler} className="w-full   text-start hover:text-[#0077B6] cursor-pointer" >LogOut</button>
    </div>
  );


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <Link
              to='/home'
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              Eshop
            </Link>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div> */}

            {/* Order-button section */}
            {auth?.email &&
              <button className="relative p-3"  >
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  4
                </div>
              </button>}
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
            <div className="flex items-center">
              {auth?.email &&
                <Popover content={content} title={null} trigger="click" className="cursor-pointer select-none">
                  <Avatar

                    style={{
                      backgroundColor: '#fde3cf',
                      color: '#f56a00',
                      textTransform: 'uppercase'
                    }}
                  >
                    {auth?.email?.slice(0, 1)}
                  </Avatar>
                </Popover>}

              {!auth?.email && <Link to={'/login'}>
                <button type="button" className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                >
                  Login
                </button>
              </Link>}

            </div>

          </div>
        </div>
      </div>
      <div className="w-full h-full border border-red-500">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
