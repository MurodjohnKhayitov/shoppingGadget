import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
import Img10 from "../../assets/product/p-10.png";
import Img11 from "../../assets/product/p-11.png";
import Img12 from "../../assets/product/p-12.png";
import Img13 from "../../assets/product/p-13.png";
import Img14 from "../../assets/product/p-14.png";
import Img15 from "../../assets/product/p-15.png";
import Img16 from "../../assets/product/p-16.png";
import Img17 from "../../assets/product/p-15.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 2,
    img: Img2,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 3,
    img: Img3,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 5,
    img: Img10,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img11,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Img12,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img13,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 2,
    img: Img6,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 3,
    img: Img7,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 5,
    img: Img14,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 6,
    img: Img15,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Img14,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img17,
    brand: "Sony",
    title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
    level: 4,
    price: "320",
    aosDelay: "400",
  },
];

const Products = () => {
  const [pathShop, setPathShop] = React.useState(false)
  const pathname = window.location.pathname;
  let PathnameToken = pathname.replace("/", "");
  React.useEffect(() => {
    if (PathnameToken?.includes('shop')) {
      setPathShop(true)
    }

  }, [PathnameToken])

  return (
    <div>
      <div className={`container ${pathShop ? "mt-10" : ""}`}>
        {/* Header section */}
        <Heading title="Mahsulotlarimiz" subtitle={"Mahsulotlarimiz bilan tanishing"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
        {pathShop && <>
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />
        </>
        }
      </div>
    </div>
  );
};

export default Products;
