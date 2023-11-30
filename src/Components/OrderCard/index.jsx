import { HiOutlineTrash } from "react-icons/hi";
import { AppContext } from "../../Context";
import { useContext } from "react";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDeleteProduct } = props;
  let renderTrash;
  if (handleDeleteProduct) {
    renderTrash = (
      <HiOutlineTrash
        onClick={() => handleDeleteProduct(id)}
        className="cursor-pointer"
      />
    );
  }
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

        <>{renderTrash} </>
      </div>
    </div>
  );
};

export default OrderCard;
