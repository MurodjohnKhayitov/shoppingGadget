import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners.jsx";

import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";

import Products from "../Products/Products";
import Blogs from "../Blogs/Blogs";
import Popup from "../Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const BannerData = {
    discount: "30% SKIDKA",
    title: "Yaxshi tabassum",
    date: "10 Yan dan 28 gacha",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "yozgi skidka",
    title4:
        "Simsiz quloqchinlar Anker Soundcore Life Q10 Black(p/n A3032H12)",
    bgColor: "#f42c37",
};

const BannerData2 = {
    discount: "30% SKIDKA",
    title: "AJOYIB SOAT",
    date: "10 Yan dan 28 gacha",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "yozgi skidka",
    title4:
        "Simsiz quloqchinlar Anker Soundcore Life Q10 Black(p/n A3032H12)",
    bgColor: "#2dcc6f",
};
 
const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
            offset: 100,
        });
        AOS.refresh();
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Hero handleOrderPopup={handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products />
            <Banner data={BannerData2} />
            <Blogs />
            <Partners />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />

        </div>
    );
};

export default Home;
