import { useState } from "react";

export const useShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  // Funciones que se encargan de abrir y cerrar el menu laterial de las ordenes
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  const toggleCheckoutSideMenu = () =>
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  // Agrega un producto al carrito, y si ya existe aumenta la cantidad y suma los productos
  const addProduct = (payload) => {
    const productIndex = cart.findIndex((product) => product.id === payload.id);
    let newCart = [];
    if (productIndex >= 0) {
      newCart = [...cart];
      newCart[productIndex].quantity++;
      newCart[productIndex].price = payload.price + newCart[productIndex].price;
    } else {
      newCart = [...cart, { ...payload, quantity: 1 }];
    }
    setCart(newCart);
    getTotalInfo(newCart);
  };

  const increaseQuantity = (id) => {
    const productIndex = cart.findIndex((product) => product.id === id);
    const newCart = [...cart];
    newCart[productIndex].quantity++;
    setCart(newCart);
    getTotalInfo(newCart);
  };

  const decreaseQuantity = (id) => {
    const productIndex = cart.findIndex((product) => product.id === id);
    const newCart = [...cart];
    if (newCart[productIndex].quantity <= 1) {
      return "El elemento no puede ser menor 1";
    }
    newCart[productIndex].quantity--;
    setCart(newCart);
    getTotalInfo(newCart);
  };

  // Elimina un producto del carrito
  const deleteProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    getTotalInfo(newCart);
  };

  // Suma la cantidad total de productos en el carrito
  const getTotalQuantity = (data) => {
    const quantity = data.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setTotalQuantity(quantity);
  };

  // Suma el precio total de todos los productos en el carrito
  const getTotalPrice = (data) => {
    const price = data.reduce((total, product) => total + product.price, 0);
    setTotalPrice(price);
  };

  // Funcion que se encarga de llamar tanto a la cantidad total y el precio total
  const getTotalInfo = (data) => {
    getTotalQuantity(data);
    getTotalPrice(data);
  };

  const cleanCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };

  return {
    cart,
    addProduct,
    deleteProduct,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
    totalQuantity,
    totalPrice,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    toggleCheckoutSideMenu,
  };
};
