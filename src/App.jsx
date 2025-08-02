import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Page Not Found....</h1>} />
      </Routes>
    </>
  );
}

export default App;
