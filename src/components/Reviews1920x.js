import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./Reviews1920x.css";

const Reviews1920x = ({ className = "" }) => {
  return (
    <section className={`reviews-1920x ${className}`}>
      <h1 className="customer-reviews-hear">
        Customer Reviews: Hear What Our Customers Have to Say
      </h1>
      <div className="testimonial-slider">
        <FrameComponent2
          ellipse213="/ellipse-213@2x.png"
          millieB="Millie B."
          texasUSA="Texas, USA"
          exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
        />
        <FrameComponent2
          ellipse213="/ellipse-213-1@2x.png"
          millieB="Sarah T."
          texasUSA="California, USA"
          exceptionalValueWithVeriz="Outstanding service! Verizon TopUp saved the day when I ran out of data mid-streaming. Highly recommend!"
        />
        <FrameComponent2
          ellipse213="/ellipse-213-2@2x.png"
          millieB="Michael L."
          texasUSA="New York, USA"
          exceptionalValueWithVeriz="Reliable and convenient. Verizon TopUp's quick and easy data replenishment process is a lifesaver for busy professionals like me."
        />
        <FrameComponent2
          ellipse213="/ellipse-213-3@2x.png"
          millieB="Emily H."
          texasUSA="Texas, USA"
          exceptionalValueWithVeriz="Exceptional value! With Verizon TopUp, I can customize my data package to fit my usage needs perfectly. No more wasted data or overage charges."
        />
      </div>
    </section>
  );
};

Reviews1920x.propTypes = {
  className: PropTypes.string,
};

export default Reviews1920x;
