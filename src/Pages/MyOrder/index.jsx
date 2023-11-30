import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { AppContext } from "../../Context";

const MyOrder = () => {
  const context = useContext(AppContext);
  // console.log(context.order?.slice(-1)[0]);
  return (
    <Layout>
      <h1>MyOrder</h1>

      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
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
