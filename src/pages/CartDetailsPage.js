import FrameComponent3 from "../components/FrameComponent3";
import CartContent from "../components/CartContent";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent3 yourCart="Your Cart" />
      <CartContent />
      <FooterDesktop />
    </div>
  );
};

export default CartDetailsPage;
