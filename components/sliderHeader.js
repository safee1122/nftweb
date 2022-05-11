import sliderHeaderStyles from "../styles/SliderHeader.module.css";
function SliderHeader(props) {
  return (
    <div className={sliderHeaderStyles.slider}>
      <p>{props.sliderTitle}</p>
      <div className={sliderHeaderStyles.sliderArrow}>
        <a>
          <img src="arrowRight.svg"></img>
        </a>
      </div>
    </div>
  );
}

export default SliderHeader;
