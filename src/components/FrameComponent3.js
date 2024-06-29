import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "", yourCart }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header5">
        <div className="header-top">
          <img
            className="global-icon1"
            loading="lazy"
            alt=""
            src="/global.svg"
          />
          <div className="go-borderless-with1">Go borderless with eSIMs</div>
          <img
            className="header-top-child"
            loading="lazy"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
        <div className="header-search">
          <div className="search-input">
            <div className="logo3">
              <img
                className="mask-group-icon3"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="alpineawwards3">AlpineAwwards</div>
            </div>
            <TextField
              className="search-field"
              placeholder="Search for products or phone number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="20px" height="20px" src="/searchnormal.svg" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "42px",
                  backgroundColor: "#eee",
                  paddingLeft: "10px",
                  borderRadius: "10px",
                },
                "& .MuiInputBase-input": { paddingLeft: "12px", color: "#000" },
              }}
            />
          </div>
          <div className="user-actions1">
            <div className="action-icons3">
              <img
                className="message-question-icon1"
                loading="lazy"
                alt=""
                src="/messagequestion.svg"
              />
              <b className="help1">Help</b>
            </div>
            <b className="en1">EN</b>
            <div className="action-icons4">
              <img
                className="user-icon1"
                loading="lazy"
                alt=""
                src="/user.svg"
              />
              <b className="login1">Login</b>
            </div>
            <div className="action-icons5">
              <img
                className="bag-2-icon1"
                loading="lazy"
                alt=""
                src="/bag2.svg"
              />
              <b className="cart1">Cart</b>
            </div>
          </div>
        </div>
        <div className="navigation1">
          <nav className="navigation-links">
            <b className="gift-cards1">Gift cards</b>
            <b className="phone-refills1">Phone Refills</b>
            <b className="esims2">eSIMs</b>
            <b className="gaming1">Gaming</b>
            <b className="travel3">Travel</b>
          </nav>
          <button className="gift-card-promo1">
            <img className="gift-icon1" alt="" src="/gift.svg" />
            <div className="get-51">Get $5</div>
          </button>
        </div>
      </header>
      <div className="frame-wrapper">
        <div className="title-content-parent">
          <div className="title-content">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent3;
