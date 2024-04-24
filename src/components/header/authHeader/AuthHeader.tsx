import { Link } from "react-router-dom";
const AuthHeader = () => {
  return (
    <div className="container py-6 w-100">
      <div className="w-100 flex items-center gap-x-10 justify-between">
        <div className="logo">
          <Link to={"/"}>SHOP.CO</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
