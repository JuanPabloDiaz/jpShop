import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useScrollPosition } from "../../Utils/useScrollPosition";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const context = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTech, setShowDropdownTech] = useState(false);

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
      <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory(null)}>
              JP·Shop
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
          <li onClick={() => setShowDropdownTech(!showDropdownTech)}>
            Electronics
            {showDropdownTech && (
              <div>
                <NavLink
                  to="/smartphones"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => context.setSearchByCategory("smartphones")}
                >
                  Phone
                </NavLink>
                <NavLink
                  to="/laptops"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => context.setSearchByCategory("laptops")}
                >
                  Laptop
                </NavLink>
              </div>
            )}
          </li>
          <li onClick={() => setShowDropdown(!showDropdown)}>
            Cosmetics
            {showDropdown && (
              <div>
                <NavLink
                  to="/fragrances"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => context.setSearchByCategory("fragrances")}
                >
                  Perfumes
                </NavLink>
                <NavLink
                  to="/skincare"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => context.setSearchByCategory("skincare")}
                >
                  Skin Care
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink
              to="/groceries"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("groceries")}
            >
              Groceries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home-decoration"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory("home-decoration")}
            >
              HomeGoods
            </NavLink>
          </li>
        </ul>

        <ul className="hidden sm:flex items-center gap-3">
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
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
        <ul className="hidden sm:flex items-center gap-3">
          <li>
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
          </li>
          <li>
            <NavLink
              to="/Logout"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
