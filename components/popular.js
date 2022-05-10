import Cards from "./Card";
import popularStyles from "../styles/Popular.module.css";
function Popular() {
  return (
    <div>
      <div className={popularStyles.slider}>
        <p>Popular</p>
        <div className={popularStyles.sliderArrow}>
          <a>
            <img src="arrowRight.svg"></img>
          </a>
        </div>
      </div>
      <div className={popularStyles.gridContainer}>
        <Cards />
      </div>
    </div>
  );
}

export default Popular;
