import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { AppContext } from "../../Context";

const Home = () => {
  const context = useContext(AppContext);

  const renderView = () => {
    // if there are items in the filteredItems array, render them
    // Filter by title and category
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return (
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-light text-md">
            No results for:
            <span className="font-medium text-md text-gray-400 pl-2">
              {context.searchByTitle}
            </span>
          </h3>
          <p className="font-light text-sm text-gray-400/80">
            Try searching for another product
          </p>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative mb-4">
        <h1 className="font-medium text-md sm:text-xl">Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="border border-black rounded-xl w-50 sm:w-96 px-4 py-2 mb-4"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-row justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
