import { FooterBottom, FooterTop, FooterContact } from "./index";

const Footer = () => {
  return (
    <div className="footer">
      <FooterContact />
      <div className="footer-main">
        <div className="container">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default Footer;
