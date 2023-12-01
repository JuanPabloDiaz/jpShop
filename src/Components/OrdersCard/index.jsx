// import {} from "react-icons/hi";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center w-80 bg-slate-500">
      <p className="flex-col justify-center items-center text-white text-2xl font-bold">
        <span className="text-gray-400 text-xl p-5">date</span>
        <span className="p-2">{totalProducts} items</span>
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
