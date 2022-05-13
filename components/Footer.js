import footerStyles from "../styles/Footer.module.css"
function Footer() {
    return (<div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerContent}>
            <div>
                <h1>Discover,Find & Sell  </h1>
            </div>
            <div>
                <p>We're bringing together esports teams, fans and crypto <br /> natives to move esports forward.</p>
            </div>
            <div className={footerStyles.footerButton}>
                <button>Explore Marketplace</button>
            </div>
        </div>
        <div className={footerStyles.footerHero}>
            <div className={footerStyles.heroBg}>
                <img src="heroBg.svg" ></img>
            </div>
            <div className={footerStyles.connections}>
                <img src="connections.svg"></img>
            </div>
        </div>

    </div>);
}

export default Footer;
