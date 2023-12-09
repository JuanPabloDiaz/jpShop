import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { AppContext } from "../../Context";
import { Skeleton } from "@/components/ui/skeleton"; // import the Skeleton component

const Home = () => {
  const context = useContext(AppContext);
  // console.log("context.isLoading: ", context.isLoading);
  const renderView = () => {
    // if there are items in the filteredItems array, render them
    // Filter by title and category

    // Skeleton while data is loading
    if (context.isLoading) {
      // if data is still loading, render the Skeleton
      // console.log("Rendering Skeleton");
      // Create an array of 10 skeletons (or however many you expect to display)
      return Array(15)
        .fill()
        .map((_, i) => (
          <>
            {/* card: */}
            <Skeleton key={i} className="w-56 h-60 rounded-lg">
              {/* image: */}
              <Skeleton className="relative m-2 p-1 bg-slate-300/30 h-44 rounded-xl">
                <div className="flex justify-end h-36">
                  {/* circle: */}
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                {/* category: */}
                <Skeleton className="absolute bottom-0 rounded-lg m-2 py-2 px-2 w-16" />
              </Skeleton>
              <div className="flex justify-around items-center h-10">
                {/* title: */}
                <Skeleton className="h-5 w-20 bg-slate-200" />
                {/* price: */}
                <Skeleton className="h-5 w-16 bg-slate-200" />
              </div>
            </Skeleton>
          </>
        ));
    } else if (context.filteredItems?.length > 0) {
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
