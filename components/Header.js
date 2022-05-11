import headerStyles from "../styles/Header.module.css";
import Button from "./Button";
import Nav from "../components/Nav";
import Popular from "./popular";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

// Import Swiper styles
import "/home/pc1/Desktop/projects/reactProjects/NFT Website/front-end/node_modules/swiper/swiper-bundle.js";
import "/home/pc1/Desktop/projects/reactProjects/NFT Website/front-end/node_modules/swiper/swiper-bundle.css";
// import required modules
import { Navigation } from "swiper";

function Header() {
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
        <div className={headerStyles.pics}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="nft.png"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="nft.png"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={headerStyles.popular}>
        <Popular />
      </div>
    </div>
  );
}

export default Header;
