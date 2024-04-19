import { letter } from "../../icon";
const FooterContact = () => {
  return (
    <div className="container">
      <div className="flex justify-between footer-contact">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <form>
          <label htmlFor="subscribe-email" className="flex items-center">
            <img src={letter} alt="letter img" />
            <input
              type="email"
              id="subscribe-email"
              placeholder="Enter your email address"
            />
          </label>
          <button type="submit">Subscribe to Newsletter</button>
        </form>
      </div>
    </div>
  );
};

export default FooterContact;
