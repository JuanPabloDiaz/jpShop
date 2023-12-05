import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../../Context";

import { AuthProvider } from "../../Context/auth"; // AuthContext is the context that will be used to store the user's data
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import MyAccount from "../MyAccount";
import SignIn from "../SignIn";
import Logout from "../Logout";
import PublicRoute from "./PublicRoute.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/smartphones"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/laptops"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/fragrances"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/skincare"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/groceries"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/home-decoration"
        element={
          <PublicRoute restricted={false}>
            <Home />
          </PublicRoute>
        }
      />
      {/* PrivateRoute: */}
      <Route
        path="/my-order"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders"
        element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders/last"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders/:id"
        element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route
        path="/sign-in"
        element={
          <PublicRoute restricted={true}>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
      {/* NotFound: */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  );
};
export default App;
