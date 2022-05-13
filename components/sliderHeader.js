import sliderHeaderStyles from "../styles/SliderHeader.module.css";
function SliderHeader({ sliderTitle, ref }) {
  return (
    <div className={sliderHeaderStyles.slider}>
      <p>{sliderTitle}</p>
      <div className={sliderHeaderStyles.sliderArrow}>
        <a >
          <img src="arrowRight.svg"></img>
        </a>
      </div>
    </div>
  );
}

export default SliderHeader;
