import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent1 from "../components/FrameComponent1";
import Reviews1920x from "../components/Reviews1920x";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <FrameComponent4 />
      <section className="category-list-parent">
        <div className="category-list">
          <img className="svg-icon" alt="" src="/svg.svg" />
          <div className="new-in">New In</div>
        </div>
        <div className="category-list1">
          <img className="svg-icon1" alt="" src="/svg-1.svg" />
          <div className="food">Food</div>
        </div>
        <div className="category-list2">
          <img className="svg-icon2" alt="" src="/svg-2.svg" />
          <div className="games">Games</div>
        </div>
        <div className="category-list3">
          <img className="svg-icon3" alt="" src="/svg-3.svg" />
          <div className="travel">Travel</div>
        </div>
        <div className="category-list4">
          <img className="svg-icon4" alt="" src="/svg-4.svg" />
          <div className="esims">eSIMs</div>
        </div>
        <div className="category-list5">
          <img className="svg-icon5" alt="" src="/svg-5.svg" />
          <div className="apparel">Apparel</div>
        </div>
        <div className="category-list6">
          <img className="svg-icon6" alt="" src="/svg-6.svg" />
          <div className="electronics">Electronics</div>
        </div>
        <div className="category-list7">
          <img className="svg-icon7" alt="" src="/svg-7.svg" />
          <div className="streaming">Streaming</div>
        </div>
        <div className="category-list8">
          <img className="svg-icon8" alt="" src="/svg-8.svg" />
          <div className="home">Home</div>
        </div>
        <div className="category-list9">
          <img className="svg-icon9" alt="" src="/svg-9.svg" />
          <div className="restaurants">Restaurants</div>
        </div>
        <div className="category-list10">
          <img className="svg-icon10" alt="" src="/svg-10.svg" />
          <div className="entertainment">Entertainment</div>
        </div>
        <div className="category-list11">
          <img className="svg-icon11" alt="" src="/svg-11.svg" />
          <div className="groceries">Groceries</div>
        </div>
        <div className="category-list12">
          <img className="svg-icon12" alt="" src="/svg-12.svg" />
          <div className="health">Health</div>
        </div>
      </section>
      <section className="frame-parent">
        <div className="bitcoin-cashback-parent">
          <h2 className="bitcoin-cashback">Bitcoin Cashback!</h2>
          <div className="see-all">See All</div>
        </div>
        <div className="brands-row-parent">
          <FrameComponent1
            amazonUkwebp="/amazonukwebp-1@2x.png"
            amazoncouk="Amazon.co.uk"
          />
          <FrameComponent1
            amazonUkwebp="/justeatukwebp-1@2x.png"
            amazoncouk="Just Eat"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
          <FrameComponent1
            amazonUkwebp="/o2pinunitedkingdomwebp-1@2x.png"
            amazoncouk="O2 PIN"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
          <FrameComponent1
            amazonUkwebp="/ubereatsukwebp-1@2x.png"
            amazoncouk="Uber Eats"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
        </div>
      </section>
      <section className="frame-group">
        <div className="top-sellers-parent">
          <h2 className="top-sellers">Top Sellers</h2>
          <div className="see-all1">See All</div>
        </div>
        <FrameComponent1
          amazonUkwebp="/airbnbunitedkingdomwebp@2x.png"
          amazoncouk="Airbnb"
          propPosition="absolute"
          propTop="166px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/deliverooukwebp-1@2x.png"
          amazoncouk="Deliveroo"
          propPosition="absolute"
          propTop="166px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/curryspcworldukwebp@2x.png"
          amazoncouk="Currys PC World"
          propPosition="absolute"
          propTop="166px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/sainsburysinstoredigitalukwebp@2x.png"
          amazoncouk="Sainsbury’s"
          propPosition="absolute"
          propTop="166px"
          propLeft="1398px"
        />
        <FrameComponent1
          amazonUkwebp="/uberridesukwebp-1@2x.png"
          amazoncouk="Uber"
          propPosition="absolute"
          propTop="588px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/justeatukwebp-1@2x.png"
          amazoncouk="Just Eat"
          propPosition="absolute"
          propTop="588px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/johnlewisandpartnersukwebp@2x.png"
          amazoncouk="John Lewis"
          propPosition="absolute"
          propTop="588px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/morrisonsukwebp@2x.png"
          amazoncouk="Morrisons"
          propPosition="absolute"
          propTop="588px"
          propLeft="1398px"
        />
      </section>
      <section className="frame-container">
        <div className="hungry-parent">
          <h2 className="hungry">Hungry?</h2>
          <div className="see-all2">See All</div>
        </div>
        <FrameComponent1
          amazonUkwebp="/ubereatsukwebp-1@2x.png"
          amazoncouk="Uber Eats"
          propPosition="absolute"
          propTop="166px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/justeatukwebp-1@2x.png"
          amazoncouk="Just Eat"
          propPosition="absolute"
          propTop="166px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/sainsburysinstoredigitalukwebp@2x.png"
          amazoncouk="Sainsbury’s"
          propPosition="absolute"
          propTop="166px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/ubereatsukwebp-1@2x.png"
          amazoncouk="Uber Eats"
          propPosition="absolute"
          propTop="166px"
          propLeft="1398px"
        />
        <FrameComponent1
          amazonUkwebp="/deliverooukwebp-1@2x.png"
          amazoncouk="Deliveroo"
          propPosition="absolute"
          propTop="588px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/tescoukwebp@2x.png"
          amazoncouk="Tesco"
          propPosition="absolute"
          propTop="588px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/asdaukwebp@2x.png"
          amazoncouk="ASDA"
          propPosition="absolute"
          propTop="588px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/aldiukwebp@2x.png"
          amazoncouk="ALDI"
          propPosition="absolute"
          propTop="588px"
          propLeft="1398px"
        />
      </section>
      <section className="frame-section">
        <div className="travel-parent">
          <h2 className="travel1">Travel</h2>
          <div className="see-all3">See All</div>
        </div>
        <FrameComponent1
          amazonUkwebp="/airbnbunitedkingdomwebp@2x.png"
          amazoncouk="Airbnb"
          propPosition="absolute"
          propTop="166px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/uberridesukwebp-1@2x.png"
          amazoncouk="Uber"
          propPosition="absolute"
          propTop="166px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/lastminute-comflightukwebp@2x.png"
          amazoncouk="lastminute.com"
          propPosition="absolute"
          propTop="166px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/virgingiftcardukwebp@2x.png"
          amazoncouk="Virgin Gift Card"
          propPosition="absolute"
          propTop="166px"
          propLeft="1398px"
        />
        <FrameComponent1
          amazonUkwebp="/hotels-comukwebp@2x.png"
          amazoncouk="Hotels.com"
          propPosition="absolute"
          propTop="588px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/eurostarukwebp@2x.png"
          amazoncouk="Euro star"
          propPosition="absolute"
          propTop="588px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/flightgiftgbwebp@2x.png"
          amazoncouk="FilightGift"
          propPosition="absolute"
          propTop="588px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/inspiretravelcardukwebp@2x.png"
          amazoncouk="Travel Card by inspire"
          propPosition="absolute"
          propTop="588px"
          propLeft="1398px"
        />
      </section>
      <section className="frame-parent1">
        <div className="entertainment-parent">
          <h2 className="entertainment1">Entertainment</h2>
          <div className="see-all4">See All</div>
        </div>
        <FrameComponent1
          amazonUkwebp="/netflixunitedkingdomwebp@2x.png"
          amazoncouk="Netflix"
          propPosition="absolute"
          propTop="166px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/appleunitedkingdomwebp@2x.png"
          amazoncouk="Apple"
          propPosition="absolute"
          propTop="166px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/playstationunitedkingdomwebp@2x.png"
          amazoncouk="Playstation"
          propPosition="absolute"
          propTop="166px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/xboxpinunitedkingdomwebp@2x.png"
          amazoncouk="XBOX"
          propPosition="absolute"
          propTop="166px"
          propLeft="1398px"
        />
        <FrameComponent1
          amazonUkwebp="/spotifyukwebp@2x.png"
          amazoncouk="Spotify"
          propPosition="absolute"
          propTop="588px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/googleplayunitedkingdomwebp@2x.png"
          amazoncouk="Google Play"
          propPosition="absolute"
          propTop="588px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/steamunitedkingdomwebp@2x.png"
          amazoncouk="Steam"
          propPosition="absolute"
          propTop="588px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/robloxunitedkingdomwebp@2x.png"
          amazoncouk="Roblox"
          propPosition="absolute"
          propTop="588px"
          propLeft="1398px"
        />
      </section>
      <section className="frame-parent2">
        <div className="top-up-your-phone-parent">
          <h2 className="top-up-your">Top up Your Phone</h2>
          <div className="see-all5">See All</div>
        </div>
        <FrameComponent1
          amazonUkwebp="/liboncallukunitedkingdomwebp@2x.png"
          amazoncouk="Libon"
          propPosition="absolute"
          propTop="166px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/eepinunitedkingdomwebp@2x.png"
          amazoncouk="EE pin"
          propPosition="absolute"
          propTop="166px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/giffgaffpinunitedkingdomwebp@2x.png"
          amazoncouk="GiffGaff"
          propPosition="absolute"
          propTop="166px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/3pinunitedkingdomwebp@2x.png"
          amazoncouk="3 pin"
          propPosition="absolute"
          propTop="166px"
          propLeft="1398px"
        />
        <FrameComponent1
          amazonUkwebp="/o2pinunitedkingdomwebp-2@2x.png"
          amazoncouk="O2 pin"
          propPosition="absolute"
          propTop="588px"
          propLeft="120px"
        />
        <FrameComponent1
          amazonUkwebp="/vodafonepinunitedkingdomwebp@2x.png"
          amazoncouk="Vodafone"
          propPosition="absolute"
          propTop="588px"
          propLeft="546px"
        />
        <FrameComponent1
          amazonUkwebp="/lebarapinunitedkingdomwebp@2x.png"
          amazoncouk="LEBARA"
          propPosition="absolute"
          propTop="588px"
          propLeft="972px"
        />
        <FrameComponent1
          amazonUkwebp="/lycamobilepinunitedkingdomwebp@2x.png"
          amazoncouk="LycaMobile"
          propPosition="absolute"
          propTop="588px"
          propLeft="1398px"
        />
      </section>
      <section className="frame-parent3">
        <div className="apparel-parent">
          <h2 className="apparel1">Apparel</h2>
          <div className="see-all6">See All</div>
        </div>
        <div className="frame-div">
          <FrameComponent1
            amazonUkwebp="/harveynicholsukwebp@2x.png"
            amazoncouk="Harvey Nichols"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
          <FrameComponent1
            amazonUkwebp="/screwfixukwebp@2x.png"
            amazoncouk="ScrewFix"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
          <FrameComponent1
            amazonUkwebp="/zalandoukwebp@2x.png"
            amazoncouk="Zalando"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
          <FrameComponent1
            amazonUkwebp="/hsamuelukwebp@2x.png"
            amazoncouk="H. Samuel"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
          />
        </div>
      </section>
      <Reviews1920x />
      <FooterDesktop />
    </div>
  );
};

export default HomePage;
