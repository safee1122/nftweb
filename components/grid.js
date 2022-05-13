import Cards from "./Card";
import SimpleCard from "./SimpleCard";
import SliderHeader from "./sliderHeader";
import gridStyles from "../styles/Grid.module.css";
import Popular from "./Popular";
import Collection from "./Collection";
import Featured from "./Featured";

// Import Swiper React components

function Grid() {

  return (
    <div className="gridSection">

      <div>
        <Popular />
        <Collection />
        <Featured />
      </div>

    </div>
  );
}

export default Grid;
