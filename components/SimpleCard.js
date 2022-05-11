import simpleCardStyles from "../styles/SimpleCard.module.css";
function SimpleCard(props) {
  return (
    <div className={simpleCardStyles.cardContainer}>
      <div className={simpleCardStyles.imgContainer}>
        <img src={props.picSrc}></img>
        <div className={simpleCardStyles.shade}></div>
      </div>
      <div className={simpleCardStyles.imgDisc}>
        <div className={simpleCardStyles.title}>
          <p>{props.title}</p>
        </div>
        <div className={simpleCardStyles.credit}>
          <p>{props.artno ? props.artno : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
