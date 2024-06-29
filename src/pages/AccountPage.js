import Main from "../components/Main";
import AccountContent from "../components/AccountContent";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <Main />
      <AccountContent />
      <footer className="footer-desktop">
        <div className="frame-parent">
          <div className="logo-parent">
            <div className="logo">
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group-1@2x.png"
              />
              <div className="alpineawwards">AlpineAwwards</div>
            </div>
            <div className="explore-a-seamless">
              Explore a seamless blend of Gift Card services at Oracle Orient
            </div>
          </div>
          <div className="frame-group">
            <div className="products-parent">
              <b className="products">Products</b>
              <div className="travel-cards">Travel Cards</div>
              <div className="gaming-cards">Gaming Cards</div>
              <div className="festival-cards">Festival Cards</div>
              <div className="food-cards">Food Cards</div>
              <div className="clothes-cards">Clothes Cards</div>
            </div>
            <div className="link-columns">
              <b className="get-to-know">Get To Know Us</b>
              <div className="about-us">About Us</div>
              <div className="contact-us2">Contact Us</div>
              <div className="agent-contact">Agent Contact</div>
              <div className="services">Services</div>
            </div>
            <div className="link-columns1">
              <b className="legal-pages">Legal Pages</b>
              <a className="terms1">Terms</a>
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
    </div>
  );
};

export default AccountPage;
