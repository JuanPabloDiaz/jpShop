import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useScrollPosition } from "../../Utils/useScrollPosition";
import { useAuth } from "../../Context/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline text-gray-500 underline-offset-4";
  const context = useContext(AppContext);

  //scrollPosition:
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownTech, setShowDropdownTech] = useState(false);

  function classNamesNavBarScroll(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  // AuthContext:
  const auth = useAuth();
  console.log("in Navbar, Auth.user: ", auth.user);

  // Navigate:
  let navigate = useNavigate();

  // logout:
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   auth.logout();
  //   console.log("You have been logged out.");
  //   navigate("/"); // Redirect to home page after logout
  // };
  // logout with confirmation (window.confirm)
  // window.confirm() function to display a confirmation dialog when the user clicks on the logout button
  const handleLogout = (e) => {
    e.preventDefault();
    if (
      window.confirm(`${auth.user.username}, Are you sure you want to logout?`)
    ) {
      auth.logout();
      console.log("You have been logged out.");
      navigate("/"); // Redirect to home page after logout
    }
  };
  return (
    <header
      className={classNamesNavBarScroll(
        scrollPosition > 0
          ? "md:shadow md:bg-white md:-translate-y-6 md:h-auto top-6"
          : "md:shadow-none md:bg-none md:translate-y-0 md:h-none",
        "absolute md:fixed top-4 inset-x-0 z-40 md:transition-shadow-xl md:shadow-black md:transition-color duration-500 md:-translate-y-6 md:h-20 lg:h-14"
      )}
    >
      {/* <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0"> */}
      <nav className="hidden sm:flex flex-col sm:flex-row justify-between items-center fixed z-10 w-full py-0 px-8 text-md font-light top-0">
        <ul className="flex flex-col sm:flex-row items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory(null)}
              className="flex items-center gap-3"
            >
              <img
                src="../../../public/assets/images/jplogo.svg"
                // src="../../../public/assets/images/logo.svg"
                alt="logo"
                className="w-14 h-14"
                // className="w-10 h-10 sm:w-8 sm:h-8"
              />
              <span>JP·Shop</span>
            </NavLink>
          </li>
          {/* <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory(null)}>
              JP·Shop
            </NavLink>
          </li> */}
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
          {auth.user && (
            <>
              <li>
                <NavLink
                  to="/my-account"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  My Account
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  My Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/card"
                  className={`flex justify-center items-center ${({
                    isActive,
                  }) => (isActive ? activeStyle : undefined)}`}
                >
                  <HiOutlineShoppingCart className="mr-1" />
                  <p>{context.cartProducts.length}</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/Logout"
                  onClick={handleLogout}
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
          {!auth.user && (
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
