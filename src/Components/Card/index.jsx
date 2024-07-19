import { useContext } from "react";
import { AppContext } from "@/Context";
import { HiCheck } from "react-icons/hi";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = (data) => {
  const context = useContext(AppContext);
  const { addProductToCart } = useContext(AppContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  // const addProductToCart = (event, productData) => {
  //   event.stopPropagation(); // Para que no se abra el modal de detalle de producto

  //   context.setCount(context.count + 1);
  //   context.setCartProducts([...context.cartProducts, productData]);
  //   // console.log(context.cartProducts);
  //   context.openCheckoutSideMenu();
  //   context.closeProductDetail();
  // };

  // Check if the product is in the cart:

  const renderIcon = (id) => {
    if (data && data.data && data.data.id) {
      const productIsInCart =
        context.cartProducts.filter((product) => product.id === id).length > 0;

      if (productIsInCart) {
        return (
          <div className="absolute right-0 top-0 m-2 flex items-center justify-center rounded-full border-none bg-black p-1 text-white">
            <HiCheck className="h-4 w-4" />
          </div>
        );
      } else {
        return (
          <div className="absolute right-0 top-0 m-2 flex items-center justify-center rounded-full border-none bg-white/50 p-1 transition duration-300 hover:bg-white">
            <TbShoppingCartPlus
              onClick={(event) => {
                event.stopPropagation();
                addProductToCart(data.data);
              }}
              className="h-4 w-4"
            />
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div
      className="h-60 w-56 cursor-pointer rounded-lg border bg-white shadow-lg  transition duration-300 hover:scale-105"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-0 m-2 rounded-lg bg-white/60 px-2 py-0.5 text-xs text-black">
          {data.data.category}
        </span>
        <img
          className="h-full w-full rounded-lg object-scale-down"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-around">
        <span className="text-sm font-light">
          {data.data.title.split(" ").slice(0, 3).join(" ")}
        </span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
