import { HiOutlineTrash, HiPlusSm, HiMinusSm } from "react-icons/hi";
import { AppContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
  const context = useContext(AppContext);
  const { id, title, imageUrl, price, handleDeleteProduct } = props;
  let renderTrash;
  if (handleDeleteProduct) {
    renderTrash = (
      <HiOutlineTrash
        onClick={() => handleDeleteProduct(id)}
        className="cursor-pointer hover:text-gray-500 rounded-full"
      />
    );
  }
  return (
    <div className="flex justify-between items-center border hover:shadow-sm hover:shadow-black trasition duration-300 rounded-lg my-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 m-0.5">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex gap-2">?</div>
      <p className="flex text-lg font-medium">${String(price).slice(0, 4)}</p>
      <div className="flex flex-col items-center h-20 p-0.5">
        {/* <>
          <HiPlusSm className="bg-white rounded-full w-6 h-6" />
        </>
        <>{context.count || "1"}</>
        <>
          <HiMinusSm className="bg-white rounded-full w-6 h-6" />
        </> */}
        <>{renderTrash}</>
      </div>
    </div>
  );
};

export default OrderCard;
