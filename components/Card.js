import NameBadge from "./NameBadge";
import cardStyles from "../styles/Card.module.css";

function Cards(props) {
  return (
    <div className={cardStyles.container}>
      <div>
        <img className={cardStyles.nftImg} src={props.nftPic}></img>
        <span className={cardStyles.badge}>
          <NameBadge img="idPic1.svg" id="@ArleneMcCoy" />
        </span>
        <div className={cardStyles.card}>
          <h1>Unreal Money</h1>
          <div className={cardStyles.cardContent}>
            <div className={cardStyles.bid}>
              <h2>Current Bidding</h2>
              <div className={cardStyles.bidValue}>
                <img src="bidIcon.svg" />
                <p>1.56 ETH</p>
              </div>
            </div>
            <div className={cardStyles.end}>
              <div className={cardStyles.endValue}>
                <h2>Ending In</h2>
                <p>8h 14m 24s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
