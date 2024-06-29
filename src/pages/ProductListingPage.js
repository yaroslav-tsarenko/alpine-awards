import Header from "../components/Header";
import CardFilters from "../components/CardFilters";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header frameDivAlignSelf="stretch" frameDivFlex="unset" />
      <section className="gift-card-hero">
        <img className="gift-card-hero-child" alt="" src="/group-5@2x.png" />
        <h1 className="explore-our-gift">Explore Our Gift Cards</h1>
        <div className="hero-description">
          <div className="whether-youre-celebrating">
            Whether you're celebrating a birthday, expressing gratitude, or
            simply spreading joy, our curated selection of eGift cards offers
            something for everyone.
          </div>
        </div>
      </section>
      <CardFilters />
      <FooterDesktop1 />
    </div>
  );
};

export default ProductListingPage;
