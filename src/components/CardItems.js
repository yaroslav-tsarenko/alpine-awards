import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CardItems.css";

const CardItems = ({ className = "", image5, propHeight }) => {
  const cardItemsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`card-items ${className}`} style={cardItemsStyle}>
      <img className="image-5-icon" loading="lazy" alt="" src={image5} />
      <div className="card-details">
        <b className="most-popular-giftcards">Most Popular Giftcards</b>
        <h3 className="upto-10-off">Upto 10% OFF</h3>
      </div>
    </div>
  );
};

CardItems.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default CardItems;
