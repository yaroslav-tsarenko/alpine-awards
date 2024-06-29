import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer-content">
        <div className="brand-info">
          <div className="logo1">
            <img
              className="mask-group-icon1"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="alpineawwards1">AlpineAwwards</div>
          </div>
          <div className="explore-a-seamless">
            Explore a seamless blend of Gift Card services at Oracle Orient
          </div>
        </div>
        <div className="footer-links">
          <div className="product-links">
            <b className="products">Products</b>
            <div className="travel-cards">Travel Cards</div>
            <div className="gaming-cards">Gaming Cards</div>
            <div className="festival-cards">Festival Cards</div>
            <div className="food-cards">Food Cards</div>
            <div className="clothes-cards">Clothes Cards</div>
          </div>
          <div className="link-categories">
            <b className="get-to-know">Get To Know Us</b>
            <div className="about-us">About Us</div>
            <div className="contact-us">Contact Us</div>
            <div className="agent-contact">Agent Contact</div>
            <div className="services">Services</div>
          </div>
          <div className="link-categories1">
            <b className="legal-pages">Legal Pages</b>
            <div className="terms">Terms</div>
            <div className="conditions">Conditions</div>
            <div className="refund-policy">Refund Policy</div>
            <div className="cancellation-policy">Cancellation Policy</div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="shopsphere-all-rights">
          © 2023 ShopSphere. All Rights Reserved.
        </div>
        <div className="legal-menu" />
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
