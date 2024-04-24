import { Link } from "react-router-dom";
import { search, basket, logout } from "../icon";
import { Navbar, HeaderTop } from "../index";
import { user } from "../icon";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { data, logged } = useSelector((state: any) => state.auth);
  const [userVisable, setUserVisable] = useState<boolean>(false);

  const handleOut = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {}, []);

  return (
    <header>
      <HeaderTop />
      <div className="container py-6">
        <div className="flex items-center gap-x-10 justify-between">
          <div className="logo">
            <Link to={"/"}>SHOP.CO</Link>
          </div>
          <Navbar />
          <div className="search flex gap-x-3 items-center">
            <div className="search-icon">
              <img src={search} alt="search icon" />
            </div>
            <input
              type="text"
              name="search"
              placeholder="Search for products..."
            />
          </div>
          <div className="right-icon flex gap-x-4">
            <img className="pointer" src={basket} alt="basket icon" />
            <div className="auth-block">
              {logged ? (
                <div className="user-icon">
                  <img
                    className="pointer"
                    onClick={() => setUserVisable(!userVisable)}
                    src={user}
                    alt="user icon"
                  />
                  {userVisable && (
                    <div className="logout">
                      <p>{data?.data?.username}</p>
                      <div className="logout-btn">
                        <button
                          onClick={handleOut}
                          className="flex items-center"
                        >
                          <img src={logout} alt="icon" /> Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/auth"}>login / register</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
