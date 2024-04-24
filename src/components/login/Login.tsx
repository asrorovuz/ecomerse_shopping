import { useEffect, useState } from "react";
import { userFailur, userStart, userSuccess } from "../../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../service/authService";
import ErrorForm from "../error/ErrorForm";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsVisable }: any) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { loading, logged } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate =useNavigate()

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: any,
    data: any
  ) => {
    const { name, value } = e.target;
    setData(() => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(userStart());

    try {
      const response = await AuthService.userLogin(data);
      dispatch(userSuccess(response.data));
      navigate("/")
      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      dispatch(userFailur(error));
    }
  };

  useEffect(() => {
    if(logged){
      navigate("/")
    }
  }, [])

  return (
    <div className="login">
      <ErrorForm />
      <div className="form-block">
        <form onSubmit={onSubmit}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => onChangeInput(e, setData, data)}
              id="email"
              placeholder="exam@gmail.com"
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => onChangeInput(e, setData, data)}
              id="password"
              placeholder="********"
            />
          </div>
          <div className="flex justify-end">
            <button>{loading ? "...loading" : "Send"}</button>
          </div>
        </form>
        <div className="btn">
          <button
            onClick={() => {
              setIsVisable(false);
            }}
            className="links"
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
