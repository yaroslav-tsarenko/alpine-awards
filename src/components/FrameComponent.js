import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  amazonUkwebp,
  amazoncouk,
  propHeight,
}) => {
  const brandTilesStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`brand-tiles ${className}`} style={brandTilesStyle}>
      <img className="amazon-ukwebp-icon" alt="" src={amazonUkwebp} />
      <div className="brand-names-container">
        <div className="amazoncouk">{amazoncouk}</div>
        <div className="brand-rating-container">
          <div className="rating-spacers">4.9</div>
          <img className="star-icon" alt="" src="/star.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  amazonUkwebp: PropTypes.string,
  amazoncouk: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FrameComponent;
