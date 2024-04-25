import { Route, Routes } from "react-router-dom";
import "../../styles/global.scss";
import Layout from "../layout/Layout";
import HomePage from "../../pages/home/HomePage";
import NotFound from "../404/NotFound";
import Auth from "../../pages/auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../service/authService";
import { userFailur, userSuccess } from "../../slice/authSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch()

  const auth = useSelector((state: any) => state.auth)

  const getUser = async() => {
    try {
      const response = await AuthService.getLogin()
      dispatch(userSuccess(response.data))
    } catch (error) {
      dispatch(userFailur(error))
    }
  }

  useEffect(() => {
    getUser()
  }, [auth.data])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App;
