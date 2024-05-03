import { Route, Routes } from "react-router-dom";
import "../../styles/global.scss";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import NotFound from "../404/NotFound";
import Auth from "../../pages/auth/Auth";
import { useDispatch } from "react-redux";
import AuthService from "../../service/authService";
import { userFailur, userSuccess } from "../../slice/authSlice";
import { useEffect } from "react";
import Shopping from "../../pages/shop/Shopping";
import CartPage from "../../pages/cart/CartPage";
import Basket from "../../pages/basket/Basket";

const App = () => {
  const dispatch = useDispatch();

  const id = localStorage.getItem("id");

  const getUser = async () => {
    try {
      const response = await AuthService.getLogin(id);
      dispatch(userSuccess(response.data));
    } catch (error) {
      dispatch(userFailur(error));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/shop/:id" element={<CartPage />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
