import headerStyles from "../styles/Header.module.css";
import Button from "./Button";
import Nav from "../components/Nav";
import Popular from "./popular";
// Import Swiper React components
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Header() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.headerContainer}>
        <Nav />
        <div className={headerStyles.disc}>
          <div className={headerStyles.pink}>
            <p>Discover</p>
          </div>
          <div>
            <p className={headerStyles.green}>Find & Sell</p>
          </div>
          <div className={headerStyles.pink}>
            <p>Extraordinary</p>
          </div>
          <div className={`${headerStyles.nft} ${headerStyles.green}`}>
            <p>NFTs</p>
          </div>
          <div className={headerStyles.innerDisc}>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and <br /> non- fungible tokens{" "}
              <span className={headerStyles.lastWord}>(NFTs)</span>.
            </p>
          </div>
          <div className={headerStyles.btn}>
            <Button text="Explore Marketplace" />
          </div>
        </div>
        <div className={headerStyles.nftPic}>
          <div ref={nextRef}>
            <img className={headerStyles.arrow} src="arrow-right.svg" />
          </div>
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={headerStyles.pics}>
                <img src="nft.png"></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={headerStyles.pics}>
                <img src="nft.png"></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={headerStyles.pics}>
                <img src="nft.png"></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div></div>
      </div>
      <div className={headerStyles.popular}>
        <Popular />
      </div>
    </div>
  );
}

export default Header;
