import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFailur, userStart, userSuccess } from "../../slice/authSlice";
import AuthService from "../../service/authService";
import ErrorForm from "../error/ErrorForm";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsVisable }: any) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loading } = useSelector((state: any) => state.auth);
  const storage = localStorage.getItem("token")
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const response = await AuthService.userRegister(data);
      dispatch(userSuccess(response.data));
      navigate("/");
      setData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      dispatch(userFailur(error));
    }
  };

  useEffect(() => {
    if (storage) {
      navigate("/");
    }
  }, [storage]);

  return (
    <div className="register">
      <ErrorForm />
      <div className="form-block">
        <form onSubmit={onSubmit}>
        <h2>Sign Up</h2>
          <div className="username">
            <label htmlFor="username">User name</label>
            <input
              type="text"
              name="username"
              onChange={(e) => onChangeInput(e, setData, data)}
              id="username"
              placeholder="Alix Smith"
            />
          </div>
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
              setIsVisable(true);
            }}
            className="links"
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
