import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`hero-content-parent ${className}`}>
      <div className="hero-content">
        <div className="refill-your-life">Refill Your Life</div>
        <div className="recommended-for-you">Recommended For you</div>
      </div>
      <div className="crypto-payment-promo">
        <div className="promo-details">
          <div className="pay-with-btc">Pay with BTC, ETH, USDC and more</div>
          <h1 className="up-to-5">
            Up to 5% Cashback with Alpine Awwards Account
          </h1>
          <Button
            className="registration-button"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#ea0b2c",
              borderRadius: "40px",
              "&:hover": { background: "#ea0b2c" },
              width: 150,
              height: 46,
            }}
          >
            Register Now
          </Button>
          <div className="spacer">
            <img
              className="spacer-elements-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006910@2x.png"
            />
            <img
              className="spacer-elements-icon1"
              loading="lazy"
              alt=""
              src="/frame-1000006916@2x.png"
            />
            <img
              className="spacer-elements-icon2"
              alt=""
              src="/spacer-elements@2x.png"
            />
            <img
              className="spacer-elements-icon3"
              alt=""
              src="/spacer-elements@2x.png"
            />
          </div>
        </div>
        <div className="brand-showcase">
          <FrameComponent
            amazonUkwebp="/amazonukwebp@2x.png"
            amazoncouk="Amazon.co.uk"
          />
          <FrameComponent
            amazonUkwebp="/justeatukwebp@2x.png"
            amazoncouk="Just Eat"
            propHeight="226px"
          />
          <FrameComponent
            amazonUkwebp="/o2pinunitedkingdomwebp@2x.png"
            amazoncouk="O2 PIN"
            propHeight="unset"
          />
          <FrameComponent
            amazonUkwebp="/ubereatsukwebp@2x.png"
            amazoncouk="Uber Eats"
            propHeight="unset"
          />
          <FrameComponent
            amazonUkwebp="/deliverooukwebp@2x.png"
            amazoncouk="Deliveroo"
            propHeight="226px"
          />
          <FrameComponent
            amazonUkwebp="/uberridesukwebp@2x.png"
            amazoncouk="Uber"
            propHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
