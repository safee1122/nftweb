import popularStyles from "../styles/Popular.module.css"
import SliderHeader from "./sliderHeader";
import Cards from "./Card";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Popular() {
    const prevRefP = useRef(null);
    const nextRefP = useRef(null);
    return (
        <div className="popular">
            <div ref={nextRefP}>
                <SliderHeader sliderTitle="Popular" />

            </div>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRefP.current;
                    swiper.params.navigation.nextEl = nextRefP.current;
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
                </SwiperSlide>
            </Swiper>
        </div>);
}

export default Popular
    ;