import { Link } from "react-router-dom";
import {facebook, git, instagram, twiter} from "../../icon"

const FooterTop = () => {
  return (
    <div className="flex justify-between footer-top">
      <div>
        <h2>SHOP.CO</h2>
        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className="social-media flex items-center">
          <Link to={""}><img src={twiter} alt="twitter"/></Link>
          <Link to={""}><img src={facebook} alt="facebook"/></Link>
          <Link to={""}><img src={instagram} alt="instagram"/></Link>
          <Link to={""}><img src={git} alt="git hub"/></Link>
        </div>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Features</Link>
          <Link to={"/"}>Works</Link>
          <Link to={"/"}>Career</Link>
        </ul>
      </div>
      <div>
        <h3>Help</h3>
        <ul>
          <Link to={"/"}>Customer Support</Link>
          <Link to={"/"}>Delivery Details</Link>
          <Link to={"/"}>Terms & Conditions</Link>
          <Link to={"/"}>Privacy Policy</Link>
        </ul>
      </div>
      <div>
        <h3>Faq</h3>
        <ul>
          <Link to={"/"}>Account</Link>
          <Link to={"/"}>Manage Deliveries</Link>
          <Link to={"/"}>Orders</Link>
          <Link to={"/"}>Payments</Link>
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          <Link to={"/"}>Free eBooks</Link>
          <Link to={"/"}>Development Tutorial</Link>
          <Link to={"/"}>How to - Blog</Link>
          <Link to={"/"}>Youtube Playlist</Link>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
