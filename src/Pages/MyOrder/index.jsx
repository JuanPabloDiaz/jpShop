import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { AppContext } from "../../Context";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(AppContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") {
    index = context.order?.length - 1;
  }
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5 ">
        <Link
          to="/my-orders"
          className="absolute left-0 bg-slate-200/60 rounded-full p-0.5 hover:bg-slate-300/80 transition duration-300"
        >
          <HiChevronLeft className="h-6 w-6 cursor-pointer" />
        </Link>
        <h1 className="">My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
