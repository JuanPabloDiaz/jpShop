import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { AppContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils/index.js";

const CheckoutSideMenu = () => {
  const context = useContext(AppContext);

  const handleDeleteProduct = (id) => {
    const newCartProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(newCartProducts);
    context.setCart(context.cart - 1);
    // Close the sidebar if the cart is empty
    if (newCartProducts.length === 0) {
      context.closeCheckoutSideMenu();
    }
  };

  const handleCheckout = () => {
    if (context.cartProducts.length === 0) {
      return; // Do nothing if the cart is empty
    }
    // Create a new order
    const orderToAdd = {
      date: "2021-10-10",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu(); // Close the sidebar
    context.setCart(0); // Reset the cart to 0
    context.setSearchByTitle(null); // Reset the search
    context.setSearchByCategory(null); // Reset the search
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 top-20 w-[360px] h-[90vh] border border-black shadow-xl shadow-black rounded-lg bg-white/70 p-2 m-2`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium">My Order</h2>
        <div>
          <HiOutlineX
            className="hover:bg-gray-200 rounded-full transition duration-300 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title.split(" ").slice(0, 2).join(" ")}
            // imageUrl={product.image} // Fake Store API
            imageUrl={product.images} // Platzi API
            price={product.price}
            quantity={product.quantity}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
      <div className="p-6">
        <p className="flex justify-around items-center ">
          <span className="font-light">Total</span>
          <span className="font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-black text-white font-medium py-2 rounded-lg mt-2 hover:bg-gray-900/50 transition duration-300"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
