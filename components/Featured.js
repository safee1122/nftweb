import SliderHeader from "./sliderHeader";
import featuredStyles from "../styles/Featured.module.css"
import SimpleCard from "./SimpleCard";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Featured() {
    const prevRefF = useRef(null);
    const nextRefF = useRef(null);
    return (<div className="Featured">
        <div ref={nextRefF}>
            <SliderHeader sliderTitle="Feature Creators" />
        </div>
        <Swiper
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRefF.current;
                swiper.params.navigation.nextEl = nextRefF.current;
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
                <div className={featuredStyles.flex}>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                    <div className={featuredStyles.flexItem}>
                        <SimpleCard picSrc="collectionPic.svg" title="@Rare#004" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>);
}

export default Featured;