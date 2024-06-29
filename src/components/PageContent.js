import PropTypes from "prop-types";
import "./PageContent.css";

const PageContent = ({ className = "" }) => {
  return (
    <section className={`page-content ${className}`}>
      <div className="sign-in-frame">
        <div className="sign-in2">
          <div className="sign-up-heading">
            <h1 className="sign-up">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="form-fields">
            <div className="name-address-username-fields">
              <div className="name-address-username-labels">
                <div className="your-name">Your Name</div>
              </div>
              <div className="email-country-password-labels">
                <input className="email" placeholder="Email" type="text" />
              </div>
            </div>
            <div className="name-address-username-fields1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="extra-fields-icon"
                  alt=""
                  src="/extra-fields.svg"
                />
              </div>
            </div>
            <div className="name-address-username-fields2">
              <div className="username-parent">
                <div className="username1">Username</div>
                <img className="spacer-icon" alt="" src="/input-fields.svg" />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-item" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <button className="button2">
              <img className="tag-icon2" alt="" src="/tag-icon.svg" />
              <div className="button3">Sign Up</div>
              <img className="tag-icon3" alt="" src="/tag-icon.svg" />
            </button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-auth-buttons">
            <img
              className="social-auth-options"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-auth-options1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-auth-options2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="form-background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
