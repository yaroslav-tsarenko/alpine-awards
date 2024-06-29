import CardItems from "./CardItems";
import PropTypes from "prop-types";
import "./CardFilters.css";

const CardFilters = ({ className = "" }) => {
  return (
    <section className={`card-filters ${className}`}>
      <div className="filter-bar">
        <div className="filter-options">
          <div className="sort-2">
            <div className="find">Find</div>
            <div className="form-field">
              <div className="form-label">Search</div>
              <img className="icon1" alt="" src="/icon.svg" />
            </div>
          </div>
          <div className="sort-1">
            <div className="sort-by">{`Sort by `}</div>
            <div className="form-field1">
              <div className="form-label1">Latest</div>
              <img className="icon2" alt="" src="/icon-1.svg" />
            </div>
          </div>
          <div className="sort-3">
            <div className="explore-our-gift1">Explore Our Gift Cards</div>
            <div className="form-field2">
              <div className="form-label2">Select by Brands</div>
              <img className="icon3" alt="" src="/icon-1.svg" />
            </div>
          </div>
        </div>
        <div className="clear-filters">
          <img className="clear-filters-child" alt="" src="/group-8796.svg" />
          <div className="clear-all-filters">Clear All Filters</div>
        </div>
      </div>
      <div className="card-grid">
        <CardItems image5="/image-5@2x.png" />
        <CardItems image5="/image-6@2x.png" propHeight="336px" />
        <CardItems image5="/image-3@2x.png" propHeight="336px" />
        <CardItems image5="/image-7@2x.png" propHeight="336px" />
        <CardItems image5="/2@2x.png" propHeight="336px" />
        <CardItems image5="/1@2x.png" propHeight="336px" />
        <CardItems image5="/4@2x.png" propHeight="336px" />
        <CardItems image5="/image-1@2x.png" propHeight="326px" />
        <CardItems image5="/image-7@2x.png" propHeight="336px" />
        <CardItems image5="/image-8@2x.png" propHeight="336px" />
        <CardItems image5="/14@2x.png" propHeight="336px" />
        <CardItems image5="/image-9@2x.png" propHeight="336px" />
      </div>
    </section>
  );
};

CardFilters.propTypes = {
  className: PropTypes.string,
};

export default CardFilters;
