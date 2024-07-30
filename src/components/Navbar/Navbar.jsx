import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Avatar } from "antd";
import { Popover, } from 'antd';
import { getAuth, signOut } from 'firebase/auth'


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
              E-shop
            </Link>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                <NavLink
                  to={`/home`}
                  style={({ isActive }) => ({
                    color: isActive ? " black" : " gray",
                  })}
                  className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                >
                  {" "}
                  Home
                </NavLink>
                <NavLink
                  to={`/shop`}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : " gray",
                  })}
                  className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                >
                  {" "}
                  Shop
                </NavLink>

                <NavLink
                  to={`/blogs`}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : " gray",
                  })}
                  className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                >
                  {" "}
                  Blogs
                </NavLink>
             

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

              {!auth?.email && <NavLink style={({ isActive }) => ({
                color: isActive ? "black" : " gray",
              })} to={'/login'} className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">

                Login
              </NavLink>}

            </div>

          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div >
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
