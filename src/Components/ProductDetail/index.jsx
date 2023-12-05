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
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import { useContext, useState } from "react";
import { AppContext } from "../../Context";

import { BeatLoader } from "react-spinners"; // npm install react-spinners

const ProductDetail = () => {
  const context = useContext(AppContext);
  // console.log("context.productToShow: ", context.productToShow);

  // Inside your component
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(false); // for image loading

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === context.productToShow?.images?.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? context.productToShow?.images?.length - 1
        : prevIndex - 1
    );
  };
  // tailwind css classes for table:
  const tdElements = "flex justify-start items-center gap-2 py-0.5";

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
      {/* <figure className="flex justify-center items-center px-6">
        <img
          className="w-fit h-60 rounded-lg"
          src={context.productToShow?.images?.[0]}
          alt={context.productToShow?.title}
        />
      </figure> */}
      {/* Image Slices: */}
      <figure className="flex justify-center items-center px-6">
        {isLoading ? (
          <BeatLoader color="#123abc" />
        ) : (
          context.productToShow?.images?.[currentImageIndex] && (
            <img
              className="w-fit h-60 rounded-lg"
              src={context.productToShow?.images[currentImageIndex]}
              alt={context.productToShow?.title}
            />
          )
        )}
      </figure>
      <div className="flex justify-around items-center">
        <button
          onClick={handlePrev}
          className="flex justify-evenly items-center w-32 bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
        >
          <HiOutlineArrowNarrowLeft />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex justify-evenly items-center w-32 bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
        >
          Next
          <HiOutlineArrowNarrowRight />
        </button>
      </div>

      {/* // ... other code */}
      <div className="p-6">
        {/* <HiOutlineBadgeCheck /> */}
        <h3 className="font-bold text-2xl mb-2 border-b">
          {context.productToShow?.title}
        </h3>

        {/* table */}

        <table className="table-auto w-full mt-4">
          <tbody className="text-gray-700">
            <tr>
              <td className={tdElements}>
                <HiOutlineCash /> Price
              </td>
              <td>${context.productToShow?.price}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineBadgeCheck /> Brand
              </td>
              <td>{context.productToShow?.brand}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlinePhotograph />
                Category
              </td>
              <td>{context.productToShow?.category}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineTag /> Discount
              </td>
              <td>{context.productToShow?.discountPercentage} %</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineStar /> Rating
              </td>
              <td>{context.productToShow?.rating}</td>
            </tr>
            <tr>
              <td className={tdElements}>
                <HiOutlineTruck /> Stock
              </td>
              <td>{context.productToShow?.stock} available</td>
            </tr>
            {/* <tr>
              <td className={tdElements}>Thumbnail</td>
              <td>{context.productToShow?.thumbnail}</td>
            </tr> */}
          </tbody>
        </table>
        {/* end table */}
        <div className={tdElements}>
          <HiOutlineDocumentText />
          <p className="mb-1 mt-2">Description</p>
        </div>
        <p className="text-gray-700 text-base">
          {context.productToShow?.description}
        </p>
        <button className="flex justify-center gap-2 items-center w-full bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300">
          <HiOutlineShoppingCart /> Add to Cart
        </button>
      </div>
      {/* // ... other code */}
    </aside>
  );
};

export default ProductDetail;
