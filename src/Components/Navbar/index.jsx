import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useScrollPosition } from "../../Utils/useScrollPosition";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const context = useContext(AppContext);

  function classNamesNavBarScroll(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <header
      className={classNamesNavBarScroll(
        scrollPosition > 0
          ? "md:shadow md:bg-white md:-translate-y-6 md:h-auto"
          : "md:shadow-none md:bg-none md:translate-y-0 md:h-none",
        "absolute md:fixed top-2 inset-x-0 z-40 md:transition-shadow-xl md:shadow-black md:transition-color duration-500 md:-translate-y-6 md:h-20 lg:h-14"
      )}
    >
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory(null)}>
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory(null)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("clothes")}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/electronics"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("electronics")}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furnitures"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("furnitures")}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("toys")}
            >
              Toys
            </NavLink>
          </li>
        </ul>

        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/card"
              className={`flex justify-center items-center ${({ isActive }) =>
                isActive ? activeStyle : undefined}`}
            >
              <HiOutlineShoppingCart className="mr-1" />
              <p>{context.cartProducts.length}</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
