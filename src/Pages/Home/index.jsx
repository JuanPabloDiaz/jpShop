import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { AppContext } from "../../Context";

const Home = () => {
  const context = useContext(AppContext);
  // {  console.log("Context: ", context);  }  //  { console.log("items: ", context.items);}

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return (
          <div className="flex items-center justify-center w-full">
            <h3 className="font-light text-md">No results found</h3>
          </div>
        );
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="border border-black rounded-xl w-96 px-4 py-2 mb-4"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
