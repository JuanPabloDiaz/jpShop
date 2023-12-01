import {
  HiOutlineShoppingCart,
  HiChevronRight,
  HiOutlineCalendar,
} from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const singularOrPlural = totalProducts === 1 ? "product" : "products";

  return (
    <div className="flex justify-evenly items-center w-80 sm:w-96 p-3 m-3 border border-black bg-white  hover:border-none hover:shadow-black transition duration-300 rounded-xl border-box shadow-box shadow-md shadow-black/50">
      <div className="flex flex-col gap-3">
        <HiOutlineCalendar className="mr-2" />
        <HiOutlineShoppingCart className="mr-2" />
      </div>
      <div className="flex gap-1 flex-col">
        <p>{currentDate}</p>
        <p className="flex justify-end items-center gap-1">
          <span className="text-black">{totalProducts}</span>
          <span className="text-gray-500/80 "> {singularOrPlural}</span>
        </p>
      </div>
      <div className="flex items-center p-2 w-fit">
        <BsCurrencyDollar className="w-6 h-6 text-slate-900" />
        <p className="font-medium text-2xl">
          {String(totalPrice).slice(0, 4)}
          {Number.isInteger(totalPrice) && (
            <span className="text-sm text-gray-500/80">.00</span>
          )}
        </p>
      </div>
      <HiChevronRight className="w-8 h-8" />
    </div>
  );
};

export default OrdersCard;
