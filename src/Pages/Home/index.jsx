import { useState, useEffect } from "react"; // Hooks to consume the API
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";

const Home = () => {
  // UseState is a hook to add the info from the API to the state
  const [items, setItems] = useState("");

  // UseEffect is a hook to fetch the data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setItems(json));
    // .then((json) => console.log(json));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {console.log("items: ", items)}
        {/* {console.log("products: ", items.products)}
        {console.log("id: ", items.products.id)}
        {console.log("price: ", items.products.price)} */}

        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        {/* {container &&
              container.map((item) => <Card key={item.id} data={item} />)} */}
      </div>
    </Layout>
  );
};

export default Home;
