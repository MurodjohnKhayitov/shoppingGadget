import { useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Banner = ({ data }) => {
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
    <div className="min-h-[550px] flex justify-center items-center py-12">
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
      <div className="container">
        <div
          style={{ backgroundColor: data?.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data?.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold"
            >
              {" "}
              {data?.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data?.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data?.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data?.title2}
            </p>
            <p data-aos="fade-up" className=" text-3xl sm:text-5xl font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button onClick={shopProduct}
                style={{ color: data.bgColor }}
                className="bg-white py-2 px-4 rounded-full"
              >
                Hozir xarid qiling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
