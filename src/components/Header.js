import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "", frameDivAlignSelf, frameDivFlex }) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      flex: frameDivFlex,
    };
  }, [frameDivAlignSelf, frameDivFlex]);

  return (
    <header className={`header4 ${className}`} style={headerStyle}>
      <div className="header-left">
        <img className="global-icon" alt="" src="/global.svg" />
        <div className="go-borderless-with">Go borderless with eSIMs</div>
        <img className="header-left-child" alt="" src="/arrow-1.svg" />
      </div>
      <div className="header-right">
        <div className="search-login">
          <div className="logo">
            <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
            <div className="alpineawwards">AlpineAwwards</div>
          </div>
          <TextField
            className="search-bar"
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
        <div className="user-actions">
          <div className="action-icons">
            <img
              className="message-question-icon"
              alt=""
              src="/messagequestion.svg"
            />
            <b className="help">Help</b>
          </div>
          <b className="en">EN</b>
          <div className="action-icons1">
            <img className="user-icon" alt="" src="/user.svg" />
            <b className="login">Login</b>
          </div>
          <div className="action-icons2">
            <img className="bag-2-icon" alt="" src="/bag2.svg" />
            <b className="cart">Cart</b>
          </div>
        </div>
      </div>
      <div className="navigation">
        <nav className="primary-menu">
          <b className="gift-cards">Gift cards</b>
          <b className="phone-refills">Phone Refills</b>
          <b className="esims1">eSIMs</b>
          <b className="gaming">Gaming</b>
          <b className="travel2">Travel</b>
        </nav>
        <button className="gift-card-promo">
          <img className="gift-icon" alt="" src="/gift.svg" />
          <div className="get-5">Get $5</div>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivAlignSelf: PropTypes.any,
  frameDivFlex: PropTypes.any,
};

export default Header;
