import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ProductDetails.css";

const ProductDetails = ({ className = "" }) => {
  return (
    <section className={`product-details ${className}`}>
      <form className="product-content">
        <div className="product-image-info">
          <img
            className="image-10-icon"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="info-titles-parent">
            <div className="info-titles">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="info-titles-child" alt="" src="/vector-9.svg" />
            </div>
            <div className="info-titles1">
              <div className="how-to-use">How to Use</div>
              <img className="info-titles-item" alt="" src="/vector-9.svg" />
            </div>
            <div className="info-titles2">
              <div className="brands-included-in">
                Brands Included In this Voucher
              </div>
              <img className="info-titles-inner" alt="" src="/vector-9.svg" />
            </div>
            <div className="info-titles3">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <img className="vector-icon" alt="" src="/vector-9.svg" />
            </div>
            <div className="product-note">
              <b className="note">Note:</b>
              <b className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</b>
            </div>
          </div>
        </div>
        <div className="product-options">
          <div className="product-name">
            <h1 className="best-buy-gift">Best Buy Gift Card</h1>
            <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
          </div>
          <div className="recipient-choice">
            <div className="i-would-like">I would Like to:</div>
            <div className="recipient-options">
              <Button
                className="recipient-types"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "10px",
                  "&:hover": { background: "#000" },
                  height: 58,
                }}
              >
                Gift a Friend
              </Button>
              <Button
                className="recipient-types1"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#000" },
                  width: 134,
                  height: 58,
                }}
              >
                Gift Myself
              </Button>
            </div>
          </div>
          <div className="card-value">
            <div className="gift-card-worth">Gift Card Worth:</div>
            <div className="value-options">
              <Button
                className="value-amounts"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#000" },
                  height: 58,
                }}
              >
                USD $200
              </Button>
              <Button
                className="value-amounts1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "10px",
                  "&:hover": { background: "#000" },
                  height: 58,
                }}
              >
                USD $500
              </Button>
              <Button
                className="value-amounts2"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#000" },
                  height: 58,
                }}
              >
                USD $700
              </Button>
              <Button
                className="value-amounts3"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#000" },
                  height: 58,
                }}
              >
                USD $1000
              </Button>
            </div>
          </div>
          <div className="quantity">
            <div className="select-your-quantity">Select your Quantity</div>
            <div className="quantity-actions">
              <div className="add-actions">
                <div className="add-actions-child" />
                <img
                  className="add-icon"
                  loading="lazy"
                  alt=""
                  src="/add.svg"
                />
              </div>
              <div className="quantity-value">
                <div className="quantity-number">4</div>
              </div>
              <div className="add-actions1">
                <div className="add-actions-item" />
                <div className="add-icon-wrapper">
                  <img
                    className="add-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector-600.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="button3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              borderRadius: "10px",
              "&:hover": { background: "#000" },
              height: 54,
            }}
          >
            Add to Cart
          </Button>
        </div>
      </form>
    </section>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default ProductDetails;
