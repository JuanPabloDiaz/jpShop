import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(AppContext);
  // console.log("context.productToShow: ", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 w-[360px] h-[90vh] border border-black shadow-xl shadow-black rounded-lg bg-white/70 p-2 m-2`}
    >
      {/* top-[68px] w-[360px] h-[calc(100vh-68px)] */}
      <div className="flex justify-between items-center ">
        <h2 className="font-medium">Product Detail</h2>
        <HiOutlineX onClick={() => context.closeProductDetail()} />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow?.images?.[0]}
          alt={context.productToShow?.title}
        />
      </figure>
      <div>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            ${context.productToShow?.price}
          </span>
          <span className="font-medium text-md">
            {context.productToShow?.title}
          </span>
          <span className="font-light text-sm">
            {context.productToShow?.description}
          </span>
        </p>
      </div>
      <div>
        <p className="flex flex-col p-6">
          <span className="font-light text-sm">
            Brand: {context.productToShow?.brand}
          </span>
          <span className="font-light text-sm">
            Category: {context.productToShow?.category}
          </span>
          <span className="font-light text-sm">
            Discount: {context.productToShow?.discountPercentage} %
          </span>
          <span className="font-light text-sm">
            Id: {context.productToShow?.id}
          </span>
          <span className="font-light text-sm">
            rating: {context.productToShow?.rating}
          </span>
          <span className="font-light text-sm">
            stock: {context.productToShow?.stock}
          </span>
          <span className="font-light text-sm">
            thumbnail: {context.productToShow?.thumbnail}
          </span>
          <span className="font-light text-sm">
            title: {context.productToShow?.title}
          </span>
          <span className="font-light text-sm">
            description: {context.productToShow?.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
