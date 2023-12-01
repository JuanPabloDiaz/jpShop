// import { HiOutlineX } from "react-icons/hi";
import {
  HiOutlineX,
  HiOutlineTag,
  HiOutlineShoppingCart,
  HiOutlineIdentification,
  HiOutlineStar,
  HiOutlineCash,
  HiOutlineTruck,
  HiOutlinePhotograph,
  HiOutlineDocumentText,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

import { useContext } from "react";
import { AppContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(AppContext);
  // console.log("context.productToShow: ", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 top-20 w-[360px] h-min sm:h-[90vh] border border-black shadow-xl shadow-black rounded-lg bg-white sm:bg-white/70 p-2 m-2`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium">Product Detail</h2>
        <HiOutlineX onClick={() => context.closeProductDetail()} />
      </div>
      <figure className="flex justify-center items-center px-6">
        <img
          className="w-fit h-60 rounded-lg"
          src={context.productToShow?.images?.[0]}
          alt={context.productToShow?.title}
        />
      </figure>
      {/* // ... other code */}
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2">
          <HiOutlineBadgeCheck /> {context.productToShow?.title}
        </h3>
        <p className="font-medium text-lg mb-2">
          <HiOutlineCash /> ${context.productToShow?.price}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineBadgeCheck /> Brand: {context.productToShow?.brand}
        </p>
        <p className="font-light text-sm mb-2">
          Category: {context.productToShow?.category}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineTag /> Discount: {context.productToShow?.discountPercentage}{" "}
          %
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineIdentification /> Id: {context.productToShow?.id}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineStar /> Rating: {context.productToShow?.rating}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineTruck /> Stock: {context.productToShow?.stock}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlinePhotograph /> Thumbnail: {context.productToShow?.thumbnail}
        </p>
        <p className="font-light text-sm mb-2">
          <HiOutlineDocumentText /> Description:{" "}
          {context.productToShow?.description}
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          <HiOutlineShoppingCart /> Add to Cart
        </button>
      </div>
      {/* // ... other code */}
    </aside>
  );
};

export default ProductDetail;
