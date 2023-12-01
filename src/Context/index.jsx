import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Get Products · State to store the data from the dummy API. It's an empty array because the data is an array of objects
  // Fetch data from API · hook to add the info from the API to the state
  const [items, setItems] = useState([]);

  // UseEffect is a hook to fetch the data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data from Dummy API: ", json); // Log the data
        // console.log("Products inside Data Dummy API: ", json.products); // Products is an array of objects inside the data from the API
        setItems(json.products); // Add the data to the state (setItems) and specify the data to be added (json.products)
      });
  }, []);

  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart · add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get Products · Search a product
  const [searchByTitle, setSearchByTitle] = useState("");
  // console.log(searchByTitle);

  // Filter items by search
  const [filteredItems, setFilteredItems] = useState(null);

  // Filter items by search
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  // Filter items by search · useEffect
  useEffect(() => {
    if (searchByTitle) {
      return setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);
  // console.log("filteredItems: ", filteredItems);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
