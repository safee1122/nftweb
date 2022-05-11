import Cards from "./Card";
import SimpleCard from "./SimpleCard";
import SliderHeader from "./sliderHeader";
import popularStyles from "../styles/Popular.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "/home/pc1/Desktop/projects/reactProjects/NFT Website/front-end/node_modules/swiper/swiper-bundle.js";
import "/home/pc1/Desktop/projects/reactProjects/NFT Website/front-end/node_modules/swiper/swiper-bundle.css";
// import required modules
function Popular() {
  return (
    <div className="gridSection">
      <div className="popular">
        <SliderHeader sliderTitle="Popular" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={popularStyles.gridContainerP}>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
              <div className="grid-item">
                <Cards nftPic="FrontManGrp.jpg" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="collection">
        <SliderHeader sliderTitle="Collection" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Featured">
        <SliderHeader sliderTitle="Feature Creators" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Popular;
