import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import CartPage from "./Components/CartPage";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import ProductDetail from "./Components/ProductDetail";
import ForgotPasswordPage from "./Components/ForgotPasswordPage"; // Import the ForgotPasswordPage component

function App() {
  const products = {
    mobiles: [
      { id: 1, name: "Samsung Galaxy S23", price: "$799", img: "https://m.media-amazon.com/images/I/71ZXHg7Oh6L._AC_SX679_.jpg" },
      { id: 2, name: "Samsung Galaxy A53", price: "$499", img: "https://m.media-amazon.com/images/I/61MEp5HIdBL.__AC_SX300_SY300_QL70_FMwebp_.jpg" },
      { id: 3, name: "Samsung Galaxy Z Fold 4", price: "$1,799", img: "https://m.media-amazon.com/images/I/61CsZQW4wOL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 4, name: "Samsung Galaxy M14", price: "$299", img: "https://m.media-amazon.com/images/I/81juPhKSZJL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 5, name: "Samsung Galaxy Note 20", price: "$999", img: "https://m.media-amazon.com/images/I/61gJyqFqX9L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 6, name: "Samsung Galaxy S21 FE", price: "$699", img: "https://m.media-amazon.com/images/I/616kK0b+d+L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 7, name: "Samsung Galaxy A14", price: "$399", img: "https://m.media-amazon.com/images/I/812-qrt9U3L._AC_UY327_FMwebp_QL65_.jpg" },
    ],
    tablets: [
      { id: 1, name: "Samsung Galaxy Tab S8", price: "$899", img: "https://m.media-amazon.com/images/I/715AVcfGf2L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 2, name: "Samsung Galaxy Tab A7", price: "$299", img: "https://m.media-amazon.com/images/I/71z9fCHuv3L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 3, name: "Samsung Galaxy Tab Active3", price: "$599", img: "https://m.media-amazon.com/images/I/81tVtJijo0L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 4, name: "Samsung Galaxy Tab S7", price: "$749", img: "https://m.media-amazon.com/images/I/81KjCyAEFxL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 5, name: "Samsung Galaxy Tab A8", price: "$349", img: "https://m.media-amazon.com/images/I/61krikJxTmL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 6, name: "Samsung Galaxy Tab S6 Lite", price: "$649", img: "https://m.media-amazon.com/images/I/51m6nUlDXoL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 7, name: "Samsung Galaxy Tab S5e", price: "$549", img: "https://m.media-amazon.com/images/I/61ZNFS1jsuL._AC_UY327_FMwebp_QL65_.jpg" },
    ],
    tvs: [
      { id: 1, name: "Samsung 55-Inch QLED", price: "$1,099", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 2, name: "Samsung 65-Inch QLED", price: "$1,399", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 3, name: "Samsung 75-Inch QLED", price: "$2,299", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 4, name: "Samsung 50-Inch Crystal UHD", price: "$899", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 5, name: "Samsung 55-Inch Crystal UHD", price: "$1,099", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 6, name: "Samsung 65-Inch Neo QLED", price: "$2,499", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 7, name: "Samsung 85-Inch QLED 8K", price: "$3,999", img: "https://m.media-amazon.com/images/I/51fnof-JvNL._AC_UY327_FMwebp_QL65_.jpg" },
    ],
    washingMachines: [
      { id: 1, name: "Samsung Front Load Washer", price: "$999", img: "https://m.media-amazon.com/images/I/71rbX-kQQBL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 2, name: "Samsung Top Load Washer", price: "$799", img: "https://m.media-amazon.com/images/I/71a8akl5+LL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 3, name: "Samsung AddWash Front Load", price: "$1,199", img: "https://m.media-amazon.com/images/I/71+htsZNuyL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 4, name: "Samsung 6.5 kg Top Load", price: "$649", img: "https://m.media-amazon.com/images/I/71H+Jx9QGpL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 5, name: "Samsung EcoBubble Washer", price: "$1,299", img: "https://m.media-amazon.com/images/I/71HGIxF5W+L._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 6, name: "Samsung FlexWash Washer", price: "$1,499", img: "https://m.media-amazon.com/images/I/41OG0APwCJL._AC_UY327_FMwebp_QL65_.jpg" },
      { id: 7, name: "Samsung QuickDrive Washer", price: "$1,399", img: "https://hataima.com/public/uploads/all/ZGOt1ckM7MjKEU9YQbnN2MIHYBlQa7l67sE3WthO.jpg" },
    ],
  };

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:category/:id" element={<ProductDetail products={products} />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* Added ForgotPasswordPage route */}
      </Routes>
    </CartProvider>
  );
}

export default App;
