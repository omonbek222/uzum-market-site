import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CardList from "./components/CardList";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CartProvider from "./context/CartContext"; // CartProvider'ni import qilish

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Navbar />
          <Slider />
          <div className="px-4 mt-10">
            <CardList />
          </div>
          <Routes>
            <Route path="/category/garantiya-nizkikh-cen--937" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
