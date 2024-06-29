import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartContent.css";

const CartContent = ({ className = "" }) => {
  return (
    <section className={`cart-content ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="item-row1">
            <div className="header6">
              <div className="header-child" />
              <div className="product-column">
                <b className="product">Product</b>
              </div>
              <div className="price-quantity">
                <b className="price">Price</b>
                <b className="quantity1">Quantity</b>
              </div>
              <b className="total">Total</b>
            </div>
            <div className="item-details">
              <img
                className="spotify-ukwebp-icon1"
                loading="lazy"
                alt=""
                src="/spotifyukwebp1@2x.png"
              />
              <div className="item-title">
                <b className="spotify1">Spotify</b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
              <div className="item-actions">
                <div className="quantity2">
                  <b className="quantity-placeholder">$120.00</b>
                  <b className="credits1">12 Credits</b>
                </div>
                <div className="increase-quantity">
                  <div className="plus-button1">
                    <div className="quantity-buttons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <b className="increase-placeholder">3</b>
                    <input className="add-icon-row" type="checkbox" />
                  </div>
                  <FormControl
                    className="time-period"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#1d1d1d",
                      borderRadius: "10px",
                      width: "100%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "Bold",
                        fontFamily: "Archivo",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "16px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/hourly-placeholder.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <b className="item-separator">$120.00</b>
            </div>
          </div>
          <ItemRow />
          <ItemRow />
          <div className="cart-actions">
            <div className="cart-actions-child" />
            <div className="action-buttons">
              <Button
                className="button4"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 134,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button5"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#1d1d1d",
                  borderRadius: "10px",
                  "&:hover": { background: "#1d1d1d" },
                  width: 143,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-header">
            <div className="header7">
              <b className="checkout-details5">Checkout Details</b>
            </div>
          </div>
          <div className="total-values-wrapper">
            <div className="total-values">
              <b className="cart-subtotal1">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="tax-labels">
              <div className="charge-labels">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="other-taxes1">Other Taxes</b>
              </div>
              <div className="tax-names">
                <b className="b6">$0.00</b>
                <b className="b7">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-header1">
            <div className="checkout-header-child" />
          </div>
          <div className="checkout-details6">
            <div className="grand-total-group">
              <b className="grand-total1">Grand Total</b>
              <b className="b8">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartContent.propTypes = {
  className: PropTypes.string,
};

export default CartContent;
