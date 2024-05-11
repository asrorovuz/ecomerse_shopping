import Button from "../../components/Button";
import bannerImg from "../../../assets/banner.png"

const BannerTop = () => {
  return (
    <div className="top-banner">
      <div className="container flex justify-between items-center banner-main">
        <div className="banner-content">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="banner-btn"><Button color="black" title="Shop Now" /></div>
          <div className="info flex justify-between items-center">
            <div>
              <h3>200+</h3>
              <p>International Brands</p>
            </div>
            <div>
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="banner img" />
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
