import { visa, googlepay, applepay, paypal, master } from "../../icon";

const FooterBottom = () => {
  return (
    <div className="footer-bottom flex justify-between items-center">
      <p>Shop.co © 2000-2023, All Rights Reserved</p>
      <div className="money-icons">
        <img src={visa} alt="click money" />
        <img src={master} alt="click money" />
        <img src={paypal} alt="click money" />
        <img src={applepay} alt="click money" />
        <img src={googlepay} alt="click money" />
      </div>
    </div>
  );
};

export default FooterBottom;
