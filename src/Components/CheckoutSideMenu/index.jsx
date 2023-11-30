import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AppContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(AppContext);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 top-20 w-[360px] h-[90vh] border border-black shadow-xl shadow-black rounded-lg bg-white/70 p-2 m-2`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium">My Order</h2>
        <div>
          <HiOutlineX onClick={() => context.closeCheckoutSideMenu()} />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
