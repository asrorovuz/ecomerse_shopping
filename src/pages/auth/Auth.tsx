import { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./auth.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../../components/header/authHeader/AuthHeader";

const Auth = () => {
  const [isVisable, setIsVisable] = useState<boolean>(true);
  
  const {logged} = useSelector((state: any) => state.auth)
  const navigate= useNavigate()

  useEffect(() => {
    if(logged){
      navigate("/")
    }
  }, [isVisable]);

  return (
    <div className="auth">
      <AuthHeader />
      {isVisable ? (
        <Login setIsVisable={setIsVisable} />
      ) : (
        <Register setIsVisable={setIsVisable} />
      )}
    </div>
  );
};

export default Auth;
