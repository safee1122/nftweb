import nameBadgeStyles from "../styles/NameBadge.module.css";
function NameBadge(props) {
  return (
    <div className={nameBadgeStyles.bdgContainer}>
      <div className={nameBadgeStyles.bdgContent}>
        <span>
          <img src={props.img}></img>
        </span>
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default NameBadge;
