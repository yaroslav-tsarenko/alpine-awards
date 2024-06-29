import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  amazonUkwebp,
  amazoncouk,
  propPosition,
  propTop,
  propLeft,
}) => {
  const brandsRowStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className={`brands-row ${className}`} style={brandsRowStyle}>
      <img className="amazon-ukwebp-icon1" alt="" src={amazonUkwebp} />
      <div className="amazon-harvey-names">
        <b className="amazoncouk1">{amazoncouk}</b>
        <div className="amazon-harvey-rating">
          <b className="empty-placeholder">4.9</b>
          <img className="star-icon1" alt="" src="/star.svg" />
        </div>
      </div>
      <div className="placeholder">$5- $300</div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  amazonUkwebp: PropTypes.string,
  amazoncouk: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent1;
