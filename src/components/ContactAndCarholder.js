import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./ContactAndCarholder.css";

const ContactAndCarholder = ({ className = "" }) => {
  return (
    <div className={`contact-and-carholder ${className}`}>
      <FrameComponent
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-number-sub-fields">
            <img
              className="card-number-sub-fields-child"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-number-sub-fields-item"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-number-sub-fields-inner"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="form-field-parent">
          <div className="form-field2">
            <input className="mmyy" placeholder="MM/YY" type="text" />
            <img className="icon2" alt="" src="/icon.svg" />
          </div>
          <div className="form-field3">
            <input className="mmyy1" placeholder="MM/YY" type="text" />
            <img className="icon3" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <FrameComponent
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon4" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="frame-div">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-and-carholder-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <button className="button4">
        <img className="tag-icon4" alt="" src="/tag-icon.svg" />
        <div className="button5">Pay Now</div>
        <img className="tag-icon5" alt="" src="/tag-icon.svg" />
      </button>
    </div>
  );
};

ContactAndCarholder.propTypes = {
  className: PropTypes.string,
};

export default ContactAndCarholder;
