import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  ellipse213,
  millieB,
  texasUSA,
  exceptionalValueWithVeriz,
}) => {
  return (
    <div className={`testimonial-cards ${className}`}>
      <img
        className="profile-pictures-icon"
        loading="lazy"
        alt=""
        src={ellipse213}
      />
      <div className="customer-details">
        <div className="millie-b">{millieB}</div>
        <div className="texas-usa">{texasUSA}</div>
      </div>
      <div className="testimonial-content">
        <h2 className="h2">“</h2>
        <div className="exceptional-value-with">
          {exceptionalValueWithVeriz}
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  ellipse213: PropTypes.string,
  millieB: PropTypes.string,
  texasUSA: PropTypes.string,
  exceptionalValueWithVeriz: PropTypes.string,
};

export default FrameComponent2;
