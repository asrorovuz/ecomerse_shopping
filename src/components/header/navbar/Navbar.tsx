import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex">
      <NavLink
        to={"/"}
        className={(isActive) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/shop"}
        className={(isActive) => (isActive ? "link-active" : "link")}
      >
        Shop
      </NavLink>
    </ul>
  );
};

export default Navbar;
