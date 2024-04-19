import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <ul className="flex">
      <NavLink to={"/"} className={(isActive) => isActive ? "link-active" : "link"}>Shop</NavLink>
      <NavLink to={"/sale"} className={(isActive) => isActive ? "link-active" : "link"}>On Sale</NavLink>
      <NavLink to={"/arrival"} className={(isActive) => isActive ? "link-active" : "link"}>New Arrivals</NavLink>
      <NavLink to={"/brand"} className={(isActive) => isActive ? "link-active" : "link"}>Brands</NavLink>
    </ul>
  )
}

export default Navbar