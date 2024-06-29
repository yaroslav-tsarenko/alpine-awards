import FrameComponent1 from "../components/FrameComponent1";
import ContactAndCarholder from "../components/ContactAndCarholder";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="paymentpage-inner">
        <FrameComponent1 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <ContactAndCarholder />
      </div>
    </div>
  );
};

export default PaymentPage;
