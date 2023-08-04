import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts, fetchCategories } from "./components/ProductsSlice";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
    
  }, []);

  return (
    <div>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
