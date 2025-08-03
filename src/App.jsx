import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router";
import OrdersPage from "./Pages/OrdersPage";
import TrackingPage from "./Pages/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<h1>Page Not Found....</h1>} />
      </Routes>
    </>
  );
}

export default App;
