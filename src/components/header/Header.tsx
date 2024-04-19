import { Link } from "react-router-dom";
import { search, basket, user } from "../icon";
import {  Navbar, HeaderTop } from "../index";

const Header = () => {
  return (
    <>
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
          <div className="flex gap-x-4">
            <img className="pointer" src={basket} alt="basket icon" />
            <img className="pointer" src={user} alt="user icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
