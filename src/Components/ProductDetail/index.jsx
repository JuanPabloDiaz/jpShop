import { HiOutlineX } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(AppContext);
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
          alt={context.productToShow.title}
          // Platzi API:
          src={context.productToShow.images}
          // Fake Store API:
          // src={context.productToShow.image}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
