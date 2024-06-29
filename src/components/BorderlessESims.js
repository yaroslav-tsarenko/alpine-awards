import Header from "./Header";
import PropTypes from "prop-types";
import "./BorderlessESims.css";

const BorderlessESims = ({ className = "" }) => {
  return (
    <section className={`borderless-e-sims ${className}`}>
      <Header frameDivAlignSelf="unset" frameDivFlex="1" />
    </section>
  );
};

BorderlessESims.propTypes = {
  className: PropTypes.string,
};

export default BorderlessESims;
