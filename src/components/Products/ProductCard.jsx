import React from "react";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { starLevel } from "../../assets";
const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const shopProduct = () => {
    if (auth?.accessToken) {
      toast.success(`Success Added`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      navigate('/login')
    }
  }
  return (
    <div className="mb-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="border p-4 rounded-lg"
            key={data.id}
          >
            <div className="w-full min-h-[200px] flex items-center justify-center">
              <img
                src={data.img}
                alt=""
                className=" object-cover rounded-md"
              />
              {/* <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                text={"Add to cart"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                handler={shopProduct}
                />
                </div> */}
            </div>
            <div className="leading-7 mt-5">
              <span>{data?.brand}</span>
              <h2 className="font-semibold  ">{data.title}</h2>
              <img
                src={starLevel}
                alt=""
                className="mt-5 "
              />
              <div className="flex items-center justify-between  mt-5">
                <p className="font-bold  text-[#006D77]">${data.price}</p>

                <button onClick={shopProduct} className="py-[2px] px-3 active:scale-95	active:opacity-70 bg-bgAdded text-[#006D77] border rounded-lg"                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
