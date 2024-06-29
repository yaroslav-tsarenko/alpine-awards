import ProductCards from "./ProductCards";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`popular-products-parent ${className}`}>
      <h1 className="popular-products">Popular Products</h1>
      <div className="popular-products1">
        <ProductCards image5="/image-5@2x.png" />
        <ProductCards image5="/image-6@2x.png" propHeight="336px" />
        <ProductCards image5="/image-3@2x.png" propHeight="336px" />
        <ProductCards image5="/image-7@2x.png" propHeight="336px" />
        <ProductCards image5="/image-4@2x.png" propHeight="336px" />
        <ProductCards image5="/image-8@2x.png" propHeight="336px" />
        <ProductCards image5="/image-9@2x.png" propHeight="336px" />
        <ProductCards image5="/image-1@2x.png" propHeight="326px" />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
