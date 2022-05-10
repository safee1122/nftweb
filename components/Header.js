import headerStyles from "../styles/Header.module.css";
import Button from "./Button";
import Nav from "../components/Nav";
import Popular from "./popular";

function Header() {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.headerContainer}>
        <Nav />
        <div className={headerStyles.disc}>
          <div className={headerStyles.pink}>
            <p>Discover</p>
          </div>
          <div>
            <p className={headerStyles.green}>Find & Sell</p>
          </div>
          <div className={headerStyles.pink}>
            <p>Extraordinary</p>
          </div>
          <div className={`${headerStyles.nft} ${headerStyles.green}`}>
            <p>NFTs</p>
          </div>
          <div className={headerStyles.innerDisc}>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and <br /> non- fungible tokens{" "}
              <span className={headerStyles.lastWord}>(NFTs)</span>.
            </p>
          </div>
          <div className={headerStyles.btn}>
            <Button text="Explore Marketplace" />
          </div>
        </div>
        <div className={headerStyles.pics}></div>
      </div>
      <div className={headerStyles.popular}>
        <Popular />
      </div>
    </div>
  );
}

export default Header;
