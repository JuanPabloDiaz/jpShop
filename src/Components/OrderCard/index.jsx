import { HiOutlineTrash } from "react-icons/hi";
import { AppContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDeleteProduct } = props;

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20 m-0.5">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        {/* <p className="text-sm font-light">{title}</p> */}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>

        <>
          <HiOutlineTrash
            onClick={() => handleDeleteProduct(id)}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </>
      </div>
    </div>
  );
};

export default OrderCard;
