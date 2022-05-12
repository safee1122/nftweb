import Cards from "./Card";
import SimpleCard from "./SimpleCard";
import SliderHeader from "./sliderHeader";
import popularStyles from "../styles/Popular.module.css";
import React, { useRef, useState } from "react";

// Import Swiper React components

function Popular() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="gridSection">
      <div className="popular">
        <SliderHeader sliderTitle="Popular" />

        <div className={popularStyles.gridContainerP}>
          <div className={popularStyles.flexP}>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
          </div>
          <div className={popularStyles.flexP}>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
            <div className={popularStyles.flexItem}>
              <Cards nftPic="FrontManGrp.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="collection">
        <SliderHeader sliderTitle="Collection" />

        <div className={popularStyles.gridContainerC}>
          <div className="gridItem1C">
            <SimpleCard
              picSrc="collectionPic.svg"
              title="Yieldling Rare #004"
              artno="12 Artwork"
            />
          </div>
          <div className="gridItem1C">
            <SimpleCard
              picSrc="collectionPic.svg"
              title="Yieldling Rare #004"
              artno="12 Artwork"
            />
          </div>
          <div className={popularStyles.gridItem5C}>
            <SimpleCard
              picSrc="grid5.svg"
              title="Yieldling Rare #004"
              artno="12 Artwork "
            />
          </div>
          <div Name="gridItem1C">
            <SimpleCard
              picSrc="collectionPic.svg"
              title="Yieldling Rare #004"
              artno="12 Artwork"
            />
          </div>
          <div className="gridItem1C">
            <SimpleCard
              picSrc="collectionPic.svg"
              title="Yieldling Rare #004"
              artno="12 Artwork"
            />
          </div>
        </div>
      </div>
      <div className="Featured">
        <SliderHeader sliderTitle="Feature Creators" />

        <div className={popularStyles.flex}>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
          <div className={popularStyles.flexItem}>
            <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
